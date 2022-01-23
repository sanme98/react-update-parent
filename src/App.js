import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

function App() {
  const [msg, setMsg] = useState('No message from child yet.');
  const dataFromChild = (data) => {
    console.log(data);
    setMsg(data);
  }

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
          Learn React
        </a>
        <p>{msg}</p>
        <Child parentFunction={dataFromChild} />
      </header>
    </div>
  );
}

export default App;
