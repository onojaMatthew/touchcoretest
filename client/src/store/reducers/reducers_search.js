import {
  POST_SEARCH_START,
  POST_SEARCH_SUCCESS,
  POST_SEARCH_FAILED,
} from "../actions/action_search";

const initialState = {
  search: [],
  error: "",
  isSearchLoading: false,
  isSearchSuccess: false,
}

const searchReducers = (state = initialState, action) => {
  switch(action.type) {
    case POST_SEARCH_START:
      return {
        ...state,
        isSearchLoading: true
      }
    case POST_SEARCH_SUCCESS:
      return {
        ...state,
        isSearchLoading: false,
        isSearchSuccess: true,
        search: action.data
      }
    case POST_SEARCH_FAILED:
      return {
        ...state,
        isSearchLoading: false,
        error: action.error
      }
    default: 
      return state
  }
}

export default searchReducers;