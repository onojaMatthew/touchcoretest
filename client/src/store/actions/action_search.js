export const POST_SEARCH_START = "POST_SEARCH_START";
export const POST_SEARCH_SUCCESS = "POST_SEARCH_SUCCESS";
export const POST_SEARCH_FAILED = "POST_SEARCH_FAILED";

export const postSearchStart = () => {
  return {
    type: POST_SEARCH_START
  }
}

export const postSearchSuccess = (data) => {
  return {
    type: POST_SEARCH_SUCCESS,
    data
  }
}

export const postSearchFailed = (error) => {
  return {
    type: POST_SEARCH_FAILED,
    error
  }
}

export const postSearch = (data) => {
  return dispatch => {
    dispatch(postSearchStart());
    fetch("http://localhost:8080/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        console.log(resp, " this is the response from the search");
        dispatch(postSearchSuccess(resp));
      })
      .catch(err => {
        dispatch(postSearchFailed(err.message));
      });
  }
}