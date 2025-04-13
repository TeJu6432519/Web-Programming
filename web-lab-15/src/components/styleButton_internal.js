import React from 'react';

function StyledButton2({ onClick, text }) {
  return (
    <div>
      <style>
        {`
          .styled-btn {
            background-color: green;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
      <button className="styled-btn" onClick={onClick}>{text}</button>
    </div>
  );
}

export default StyledButton2;
