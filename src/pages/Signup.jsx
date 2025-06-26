import React from 'react';
import Backgroundimg from '../components/Backgroundimg';
import Header from '../components/Header';
import CTA from '../components/CTA';
import { styled } from 'styled-components';

export default function Signup() {
  return (
    <Container>
      <Backgroundimg />
     
      <div className="content">
         <Header  />
        <div className="body">
          <div className="text-content">
            <h1>Unlimited movies, TV shows and more</h1>
            
            <h4>Starts at Rs 250. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
          <div className="form-container">
            <div className="form">
              <input type="email" placeholder="Email address" name="email" />
             
              <CTA />
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