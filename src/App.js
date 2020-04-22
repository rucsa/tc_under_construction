import React from 'react';
import catcher from './catcher.svg';
import flower from './flower.svg';
import vinyl from './vinyl.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vinyl} className="App-vinyl" alt="logo" />
        <img src={flower} className="App-flower" alt="logo" />
        <img src={catcher} className="App-catcher" alt="logo" />
        <div className="text">
          <h1>Something trippy is under construction here</h1>
          <p> Until then #stayhome.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
