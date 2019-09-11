import axios from "axios";
import Auth from "../../helper/Auth";
import history from "../../helper/history";
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
    axios.post("http://localhost:8080/api/login", { data })
      .then(resp => {
        dispatch(postLoginSuccess(resp.data));
        console.log(resp.data, " the response from the server");
        Auth.authenticateUser(JSON.stringify(resp.data));
        if (resp) {
          history.push("/search");
        }
      })
      .catch(err => {
        dispatch(postLoginFailed(err.message));
      });
  }
}



