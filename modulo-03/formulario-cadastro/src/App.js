import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Typography, Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import { validarCpf, validarSenha, validarNome, validarCep } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">
        {"Formulário de Cadastro"}
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCpf, senha: validarSenha, nome: validarNome, cep: validarCep }}
      >
        <FormularioCadastro aoEnviar={aoEnviar} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviar(dados) {
  console.log(dados);
}

export default App;
