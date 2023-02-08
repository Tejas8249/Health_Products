import {combineReducers} from "redux";
import UserLoggedIn from "./UserLoggedIn";
import UserReducer from "./UserReducer";

let rootReducer=combineReducers({
    UserReducer, 
    UserLoggedIn
});

export default rootReducer;