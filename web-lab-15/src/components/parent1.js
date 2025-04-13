// Parent.js
import React from 'react';
import Child from './child1'; // Import the Child component

const Parent = () => {
  const message = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={message} /> {/* Pass the message prop to the Child component */}
    </div>
  );
};

export default Parent;
