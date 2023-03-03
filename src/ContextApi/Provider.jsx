import React, {createContext ,useContext, useReducer} from 'react';
//prepares the data layer
export const StateContext = createContext();
//wrap our data and provide the datalayer with the data  
export const StateProvider = ({children,reducer,initialState}) =>{
  return <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
}
export const useStateValue = () =>useContext(StateContext);

