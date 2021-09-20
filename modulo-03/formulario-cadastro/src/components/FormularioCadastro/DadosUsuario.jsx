import React from "react";
import { Button, TextField } from "@mui/material";

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
