import {  takeLatest,all, takeEvery, put,call } from "redux-saga/effects";

import {USER_LOGGEDIN_ACTION} from "../actions"
import {USER_ACTION} from "../actions"
import UserLoggedIn from "../reducers/UserLoggedIn"
import UserPerspective from "../reducers/UserPerspective"



function* userLoggedin({payload}){
        
    yield put({type:"USER_LOGGEDIN_SUCCESS" , payload:payload})
   
}

function* userPerspective({payload}){
         
    yield put({type: "USER_ACTION_SUCCESS", payload: payload })
}


function* MainSaga() {
    
    yield takeEvery ( USER_LOGGEDIN_ACTION, userLoggedin)

    yield takeEvery( USER_ACTION, userPerspective)
}

export default MainSaga;
