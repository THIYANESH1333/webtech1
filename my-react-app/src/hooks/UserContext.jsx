import React, { createContext, useContext } from 'react'
export const UserContext = createContext()
export const UserProvider=({children})=>{
  const names = {name:'thiyanesh',age:20,address:'erode'};
return(
    <UserContext.Provider value={names}>
            {children}
    </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext)