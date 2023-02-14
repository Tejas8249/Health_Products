import {combineReducers} from "redux";
import UserLoggedIn from "./UserLoggedIn";
import UserPerspective from "./UserPerspective";

let rootReducer=combineReducers({
    UserPerspective, 
    UserLoggedIn
});

export default rootReducer;