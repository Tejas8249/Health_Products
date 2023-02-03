import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/UserReducer"


const store= configureStore({
     reducer: rootReducer
 })
  export default store;  