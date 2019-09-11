import {
  GET_CABIN_TYPE_START,
  GET_CABIN_TYPE_SUCCESS,
  GET_CABIN_TYPE_FAILED,
} from "../actions/action_cabin_type";

const initialState = {
  cabin: [],
  error: "",
  isCabinLoading: false,
  isCabinSuccess: false,
}

const cabinTypeReducers = (state = initialState, action) => {
  switch(action.type) {
    case GET_CABIN_TYPE_START:
      return {
        ...state,
        isCabinLoading: true
      }
    case GET_CABIN_TYPE_SUCCESS:
      return {
        ...state,
        isCabinSuccess: true,
        cabin: action.data
      }
    case GET_CABIN_TYPE_FAILED:
      return {
        ...state,
        isCabinLoading: false,
        error: action.error
      }
    default: 
      return state
  }
}

export default cabinTypeReducers;
