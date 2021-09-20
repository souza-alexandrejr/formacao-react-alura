import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormularioCadastro() {
  const [nome, setNome] = useState("Ricardo");

  return (
    <form onSubmit={
      (event) => {
        event.preventDefault();
        console.log(nome);
      }
    }>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
        onChange={
          (event) => {
            setNome(event.target.value);
            if (nome.length >= 3) {
              setNome(nome.substr(0,3));
            }
          }
        }
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel control={<Switch defaultChecked />} label="Promoções" />
      <FormControlLabel control={<Switch defaultChecked />} label="Novidades" />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
