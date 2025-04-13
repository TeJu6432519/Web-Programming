import React, { useRef } from 'react';

const FocusForm = () => {
  // Create a ref for the input field
  const inputRef = useRef(null);

  // Function to handle the button click and focus the input field
  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input field using the ref
  };

  return (
    <div>
      <h2>Focus on Input Field</h2>
      <form>
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="Click the button to focus me!" 
        />
        <button type="button" onClick={handleFocus}>Focus Input</button>
      </form>
    </div>
  );
};

export default FocusForm;
