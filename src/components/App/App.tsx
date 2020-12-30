import React from 'react';
import './App.css';
import Header from '../Header/';
import Button from '../../shared/Button'
import Container from '../../shared/Container/';


function App() {
  return (
    <div className="App">
    
      <Header title="AlgaStock" />

      <Container>

        <Button content="Botão" onClick = { () => window.alert ("isto é um teste!")} />
        </Container>
    
    </div>  
  );
}

export default App;
