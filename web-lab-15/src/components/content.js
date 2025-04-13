import React, { useState } from 'react';

function Content() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch joke.');
    }
  };

  return (
    <div>
      <button onClick={fetchJoke}>Get a Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default Content;
