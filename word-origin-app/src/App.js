import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [origin, setOrigin] = useState('');

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const fetchWordOrigin = async () => {
    const response = await fetch('/data/words.json');
    const data = await response.json();
    if (data[word]) {
      setOrigin(data[word].origin);
    } else {
      setOrigin('No origin found for this word.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWordOrigin();
  };

  return (
    <div className="App">
      <h1>*Strongs*</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input 
          type="text" 
          value={word} 
          onChange={handleInputChange} 
          placeholder="Enter a word"
        />
        <button type="submit">Get Origin</button>
      </form>
      {origin && <p>Origin: {origin}</p>}
    </div>
  );
}

export default App;
