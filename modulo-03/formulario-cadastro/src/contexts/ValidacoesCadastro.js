import React from "react";
import { validarCpf, validarSenha, validarNome, validarCep } from "../models/cadastro"

const ValidacoesCadastro = React.createContext({
  cpf: validarCpf,
  senha: validarSenha,
  nome: validarNome,
  cep: validarCep,
});

export default ValidacoesCadastro;
