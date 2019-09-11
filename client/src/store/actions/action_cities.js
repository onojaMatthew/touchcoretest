export const GET_CITIES_START = "GET_CITIES_START";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_FAILED = "GET_CITIES_FAILED";


export const getCitiesStart = () => {
  return {
    type: GET_CITIES_START
  }
}

export const getCitiesSuccess = (data) => {
  return {
    type: GET_CITIES_SUCCESS,
    data
  }
}

export const getCitiesFailed = (error) => {
  return {
    type: GET_CITIES_FAILED,
    error
  }
}

export const getCities = () => {
  return dispatch => {
    dispatch(getCitiesStart())
    fetch("http://localhost:8080/api/cities", {
      method: "GET",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(getCitiesSuccess(resp))
      })
      .catch(err => {
        dispatch(getCitiesFailed(err.message));
      });
  }
}