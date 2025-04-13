import React from 'react';
import './styles.css';

function StyledButton3({ onClick, text }) {
  return <button className="styled-btn3" onClick={onClick}>{text}</button>;
}

export default StyledButton3;
