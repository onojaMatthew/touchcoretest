export const GET_CABIN_TYPE_START = "GET_CABIN_TYPE_START";
export const GET_CABIN_TYPE_SUCCESS = "GET_CABIN_START_SUCCESS";
export const GET_CABIN_TYPE_FAILED = "GET_CABIN_TYPE_FAILED";

export const getCabinTypeStart = () => {
  return {
    type: GET_CABIN_TYPE_START
  }
}

export const getCabinTypeSuccess = (data) => {
  return {
    type: GET_CABIN_TYPE_SUCCESS,
    data
  }
}

export const getCabinTypeFailed = (error) => {
  return {
    type: GET_CABIN_TYPE_FAILED,
    error
  }
}

export const getCabinType = () => {
  return dispatch => {
    dispatch(getCabinTypeStart())
    fetch("http://localhost:8080/api/cabintype", {
      method: "GET",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(getCabinTypeSuccess(resp))
      })
      .catch(err => {
        dispatch(getCabinTypeFailed(err.message));
      });
  }
}