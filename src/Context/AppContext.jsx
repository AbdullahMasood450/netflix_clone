import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const UserContext = createContext() ; 

function AppContext({ children }) {
    const [email , setEmail ]= useState( ()=> {localStorage.getItem( 'email' || '' ) } ); 
    const [password , setPassword] = useState( ()=> {localStorage.getItem( 'passwprd' || '' ) });

    useEffect(()=>
    {
        localStorage.setItem('email' , email);
        localStorage.setItem('password' , password);
    }, [email , password])
  return (
    <UserContext.Provider value = {[email , setEmail , password , setPassword ]}>
            {children}
    </UserContext.Provider>
      
   
  )
}

export default AppContext
