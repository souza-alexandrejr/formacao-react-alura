import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Typography, Container } from "@mui/material";
import "@fontsource/roboto/300.css";

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">
        {"Formulário de Cadastro"}
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviar} />
    </Container>
  );
}

function aoEnviar(dados) {
  console.log(dados);
}

export default App;
