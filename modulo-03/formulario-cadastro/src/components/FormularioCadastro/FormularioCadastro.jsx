import React, { Fragment } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviarForm, validarCpf }) {
  return (
    <Fragment>
      <DadosPessoais onSubmit={aoEnviarForm} validarCpf={validarCpf} />
      <DadosUsuario />
      <DadosEntrega />
    </Fragment>
  );
}

export default FormularioCadastro;
