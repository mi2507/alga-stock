import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponents from '../TesteComponents';
import ClassComponents from '../ClassComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < TestComponents name = "Michelle"/>
        < ClassComponents name="Mundo !!!"/>
      </header>
    </div>  
  );
}

export default App;
