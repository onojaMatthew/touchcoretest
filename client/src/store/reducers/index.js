import { combineReducers } from "redux";
import login from "./reducers_login";
import cities from "./reducers_cities";
import search from "./reducers_search";

const rootReducer = combineReducers({
 login,
 cities,
 search,
});

export default rootReducer;
