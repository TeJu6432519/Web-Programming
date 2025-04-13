import React from 'react';

function StyledButton1({ onClick, text }) {
  const buttonStyle = {
    backgroundColor: 'blue',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    width:"200px",
    cursor:"pointer"
  };

  return <button style={buttonStyle} onClick={onClick}>{text}</button>;
}

export default StyledButton1;
