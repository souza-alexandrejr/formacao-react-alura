import React from "react";
import { Button, TextField } from "@mui/material";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
    }}>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
