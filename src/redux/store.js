import { legacy_createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./reducers/RootReducer"
import createSagaMiddleware from "@redux-saga/core";
import MainSaga from "./Saga/Saga";


let sagaMiddleware= createSagaMiddleware();


const store = legacy_createStore(
     rootReducer, 
compose( applyMiddleware(sagaMiddleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 )

 sagaMiddleware.run(MainSaga)

 
  export default store;  