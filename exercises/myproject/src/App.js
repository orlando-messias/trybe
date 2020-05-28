import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tecnologies = ['React', 'JSX', 'Webpack', 'Flux/Redux', 'axios/fetch', 'Jest/Mocha'];

function App() {
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
        <p>Tecnologies to build Web Applications</p>
          {tecnologies.map(tecnologie => task(tecnologie))}
      </header>
    </div>
  );
}

export default App;
