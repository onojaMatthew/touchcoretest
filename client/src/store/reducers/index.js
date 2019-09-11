import { combineReducers } from "redux";
import login from "./reducers_login";
import cities from "./reducers_cities";

const rootReducer = combineReducers({
 login,
 cities,
});

export default rootReducer;
