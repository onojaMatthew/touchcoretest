import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
} from "../actions/action_login";

const initialState = {
  user: {},
  error: "",
  isLoginLoading: false,
  isLoginSuccess: false,
  isLogoutLoading: false,
  isLogoutSuccess: false,
}

const loginReducers = (state = initialState, action) => {
  switch(action.type) {
    case POST_LOGIN_START:
      return {
        ...state,
        isLoginLoading: true
      }
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginLoading: false,
        isLoginSuccess: true,
        user: action.data
      }
    case POST_LOGIN_FAILED:
      return {
        ...state,
        isLoginLoading: false,
        error: action.error
      }
    default: 
      return state
  }
}

export default loginReducers;
