import React from 'react'
import back from '../assets/login.jpg'
import styled from 'styled-components'

function Backgroundimg() {
  return (
    <Container>
      <img src= { back } alt='Netflix Login Page'></img>
    </Container>
  )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
img { 
height: 100vh; 
width: 100vw
}

`


export default Backgroundimg
