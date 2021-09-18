import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <h1> Formulário de Cadastro </h1>
      <FormularioCadastro /> 
    </Container>    
  );
}

export default App;
