import React from 'react'
import { UserContext } from '../Context/AppContext'
import { useContext } from 'react'
function Login() {
  
    const [email , setEmail , password , setPassword] = useContext(UserContext);
  return (
    <div>
      LOGIN <p>\n</p>
      password {password}

    </div>
  )
}

export default Login
