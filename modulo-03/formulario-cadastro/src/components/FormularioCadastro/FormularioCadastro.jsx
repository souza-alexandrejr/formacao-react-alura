import React, { Fragment, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(1);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />;
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>{"Erro ao selecionar formulário!"}</Typography>;
    }
  }

  return (
    <Fragment>
      {formularioAtual(etapaAtual)}
    </Fragment>
    );
}



export default FormularioCadastro;
