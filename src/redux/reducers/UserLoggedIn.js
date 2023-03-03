import { USER_LOGGEDIN_ACTION } from "../actions";
import {  put,call, takeLatest } from "redux-saga/effects";

let UserLoggedIn=(state=false, Action)=>{
    
    switch (Action.type) {
       case "USER_LOGGEDIN_SUCCESS": 
            return state=Action.payload     
       default: 
           return state;
    }
}


export default UserLoggedIn;



