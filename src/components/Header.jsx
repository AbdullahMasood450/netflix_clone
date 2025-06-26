import React from 'react';
import NETFLIX_LOGO_URL from '../assets/logo.png';
import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between'>
      <div className="logo">
        <img
          src={NETFLIX_LOGO_URL}
          alt="Netflix Logo"
        />
        </div>
        <button onClick={() => navigate(props.login? "/login" : "/signup")}>
          {props.login? 'LogIn' : 'Signup'}
        </button>
    
    </Container>
  );
}

const Container = styled.div`
 padding: 1rem 10rem 0;

.logo{

img{
height: 5rem;
}
}
button {

padding: 0.5rem 1rem;
background-color: #e50914;
border: none; 
cursor: pointer; 
color: white;
border-radius: 5px;
font-weight: bolder; 
font-size: 1.05rem;

display: block;  }
`;

export default Header;