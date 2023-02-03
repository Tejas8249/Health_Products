import {combineReducers} from "redux";
import { USER_ACTION, USER_LOGGEDIN } from "../actions";

let UserReducer=(state=true, Action)=>{
     switch (Action.type) {
        case USER_ACTION: 
             return state=Action.payload     
        default:
            return state;
     }
}

let UserLoggedIn=(state=false, Action)=>{
    switch (Action.type) {
       case USER_LOGGEDIN: 
            return state=Action.payload     
       default:
           return state;
    }
}

let rootReducer=combineReducers({UserReducer, UserLoggedIn});

export default rootReducer;