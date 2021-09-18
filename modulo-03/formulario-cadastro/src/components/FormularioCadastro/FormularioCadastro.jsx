import React from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
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
