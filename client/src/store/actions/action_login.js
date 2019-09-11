import axios from "axios";
import Auth from "../../helper/Auth";
export const POST_LOGIN_START = "POST_LOGIN_START";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAILED = "POST_LOGIN_FAILED";

export const postLoginStart = () => {
  return {
    type: POST_LOGIN_START
  }
}


export const postLoginSuccess = (data) => {
  return {
    type: POST_LOGIN_SUCCESS,
    data
  }
}

export const postLoginFailed = (error) => {
  return {
    type: POST_LOGIN_FAILED,
    error
  }
}

export const postLogin = (data, userType) => {
  return dispatch => {
    dispatch(postLoginStart());
    fetch(`http://localhost:4000/api/v1/signin/${userType}`, {
      method: "POST",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(postLoginSuccess(resp));
        Auth.authenticateUser(JSON.stringify(resp));
      })
      .catch(err => {
        dispatch(postLoginFailed(err.message));
      });
  }
}



