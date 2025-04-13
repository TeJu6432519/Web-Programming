import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = () => {
    dispatch({ type: 'increment' });
  };

  const decrease = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      <h2>Counter (useReducer)</h2>
      <p>Count: {state.count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default CounterWithReducer;
