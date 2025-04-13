import React, { useRef } from 'react';

const FormWithRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    alert(`Submitted Name: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormWithRef;
