import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Netflix from "./pages/Netflix"

 function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route exactpath ="/login" element = {<Login/>} /> 
      <Route exactpath ="/signup" element = {<Signup/>} /> 
      <Route exactpath ="/" element = {<Netflix/>} /> 
      </Routes>

    </BrowserRouter>
  )
}

export default App;