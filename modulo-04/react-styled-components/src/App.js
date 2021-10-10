import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import GlobalStyle from "./Components/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/ui/temas";

function App() {
  return (
    <ThemeProvider theme={temaEscuro}>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
