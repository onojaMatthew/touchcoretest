import { combineReducers } from "redux";
import login from "./reducers_login";

const rootReducer = combineReducers({
 login,
});

export default rootReducer;
