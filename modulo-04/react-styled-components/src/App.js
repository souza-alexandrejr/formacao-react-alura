import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import GlobalStyle from "./Components/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/ui/temas";
import { BtnTema } from "./Components/ui";
import SwitcherTema from "./Components/SwitcherTema";

import { useState } from "react";

function App() {
  const [tema, setTema] = useState(true);

  const trocarTema = () => {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={trocarTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
