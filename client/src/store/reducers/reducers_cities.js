import { 
  GET_CITIES_START,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILED, 
} from "../actions/action_cities";

const initialState = {
  cities: [],
  error: "",
  isCitiesLoading: false,
  isCitiesSuccess: false,
}

const citiesReducers = (state = initialState, action) => {
  switch(action.type) {
    case GET_CITIES_START:
      return {
        ...state,
        isCitiesLoading: true
      }
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        isCitiesLoading: false,
        isCitiesSuccess: true,
        cities: action.data
      }
    case GET_CITIES_FAILED:
      return {
        ...state,
        isCitiesLoading: false,
        error: action.error
      }
    default: 
      return state
  }
}

export default citiesReducers;
