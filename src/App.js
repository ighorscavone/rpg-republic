import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Dice from './dice/dice/main.js';

function App() {
  React.useEffect(() => {
    Dice.dice_initialize(document.body);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React AGORA MESMOasdas
        </a>
      </header>
      <div id="canvas"></div>
    </div>
  );
}

export default App;
