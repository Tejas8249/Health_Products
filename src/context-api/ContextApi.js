import React, { createContext } from 'react'

export userContext=createContext();

const ContextApi = ({children}) => {
  return (
   <userContext.Provider>
    {children}
   </userContext.Provider>
  )
}

export default ContextApi