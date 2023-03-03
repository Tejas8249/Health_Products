import { USER_ACTION } from "../actions";
import { put } from "redux-saga/effects";

let UserPerspective=(state=true, Action)=>{
     switch (Action.type) {
        case "USER_ACTION_SUCCESS":
             return state=Action.payload
        default:
            return state;
     }
}


export default UserPerspective;
