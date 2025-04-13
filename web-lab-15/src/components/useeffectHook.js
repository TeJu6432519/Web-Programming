import React, { useState, useEffect } from 'react';

const JokeComponent = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch a random joke from the API
  const fetchJoke = async () => {
    setLoading(true); // Set loading state to true before fetching
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
      setLoading(false); // Set loading state to false after receiving data
    } catch (err) {
      setError('Failed to fetch joke.');
      setLoading(false);
    }
  };

  // Fetch joke when component mounts
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h2>Random Joke</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{joke}</p>
      )}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default JokeComponent;
