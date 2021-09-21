import React, { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, camposValidos] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (camposValidos()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        name="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="senha"
        name="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onBlur={validarCampos}
      />

      <Button variant="contained" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
