import React from 'react';

export default function CTAButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#e50914',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        padding: '0.8em 1.6em',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        transition: 'background-color 0.3s ease',
      }}
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
        
        
      >
        <path d="M10 17l5-5-5-5v10z" />
      </svg>
    </button>
  );
}


