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
      <FormularioCadastro onSubmit={aoEnviarForm} validarCpf={validarCpf} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
