// src/App.js
import React from 'react';
import { Button } from './components/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Component Library</h1>
        <Button label="Click Me" onClick={handleClick} />
        <Button label="Disabled Button" disabled />
      </header>
    </div>
  );
}

export default App;
