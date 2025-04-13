// Child.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const Child = ({ message }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{message}</p>
    </div>
  );
};

// Validate the props
Child.propTypes = {
  message: PropTypes.string.isRequired, // message must be a string and is required
};

export default Child;
