import React from 'react';
import Backgroundimg from '../components/Backgroundimg';
import Header from '../components/Header';
import { styled } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/AppContext"
import { useContext } from 'react';



export default function Signup() {

  const navigate = useNavigate();
  const [ email , setEmail , password , setPassword ] = useContext(UserContext);
const checkValidity = () => email.trim() !== '' && password.trim() !== '';

  const Handleclick = () => {
     if (!checkValidity())
     {
      alert('please fill in all the fields')
     }
     else{
        axios.post('http://127.0.0.1:3001/signup' , {
            email, 
            password
        })
        .then(response=> {
              if (response.status === 201) {
                    // User created successfully
                    alert(response.data.message);
                    navigate('/login');
                  } else if (response.status === 200) {
                    // Bad request — user already exists
                      alert(response.data.message);
                  } else {
                    // Some other response
                    alert('Something unexpected happened.');
                  }
        })
        .catch(error=>
        {
            alert(error);
        });
     }
     
  };

 

  return (
    <Container>
      <Backgroundimg />
     
      <div className="content">
         <Header signin />
        <div className="body">
          <div className="text-content">
            <h1>Unlimited movies, TV shows and more</h1>
            
            <h4>Starts at Rs 250. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
          <div className="form-container">
            <div className="form">
              <input type="email" placeholder="Email address" name="email" 
              onChange={(e) => setEmail(e.target.value)}
              
              />
              <input type="password" placeholder="Password" name="password"
              onChange={(e) => setPassword(e.target.value)}
              
              />
             
              <button
              className='start'
              onClick={Handleclick}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#8B0000')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#e50914')}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                fill="white"
                className="cta-icon"
              >
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
            </button>

            </div>
            
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .content {
    position: absolute;
    top: 0;
    left: -4rem;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
    display: flex;
    flex-direction: column;
    padding: 0 4rem;
    color: white;
    text-align: center;

    .body {
    
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin-top: 4rem; /* Adjust based on your header height */
    }

    .text-content {
      max-width: 800px;
      margin: 0 auto 2rem;

      h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.1;
      }

    
      h4 {
        font-size: 1.5rem;
        font-weight: 500;
        margin: 1rem 0;
      }

      h6 {
        font-size: 1.25rem;
        font-weight: 400;
        margin: 1.5rem 0;
      }
    }

    .form-container {
      width: 100%;
      max-width: 600px;
      

      .form {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-bottom: 1.5rem;

        input {
          
          padding: 1rem;  
          height: 1rem;
          
          font-size: 1.1rem; 
  
          border-radius: 4px;
          border: none;
          font-size: 1rem;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid #333;
          color: white;

          &::placeholder {
            color: #999;
          }
        }

        button.start {
        background-color: #e50914;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.5rem 3rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        transition: background-color 0.3s ease;
        white-space: nowrap;

        &:hover {
          background-color: #f40612;
        }
      }


      }

      .login-button {
        background: transparent;
        border: none;
        color: #737373;
        font-size: 1.1rem;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: white;
          text-decoration: underline;
        }

        
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      padding: 0 2rem;

      .text-content {
        h1 {
          font-size: 2rem;
        }

        h4 {
          font-size: 1.2rem;
        }

        h6 {
          font-size: 1rem;
        }
      }

      .form-container {
        width: 100%;
      }
    }
  }
`;





