import { combineReducers } from "redux";
import login from "./reducers_login";
import cities from "./reducers_cities";
import search from "./reducers_search";
import cabin from "./reducers_cabin_type";

const rootReducer = combineReducers({
 login,
 cities,
 search,
 cabin,
});

export default rootReducer;
