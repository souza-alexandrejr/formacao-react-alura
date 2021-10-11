import React from "react";
import App from "./App";

/* 
Importando o render e o screen da lib de testes para que o 
componente a ser testado seja renderizado e para que o teste 
consiga acessar o tal componente, respectivamente.
*/
import { render, screen } from "@testing-library/react";

/*
 Convenção de Nomenclatura:
  <nome da classe a testar>.test.js ou <nome da classe a testar>.expect.js
*/

// definição de estrutura com a descrição do teste e os casos de teste
describe("Componente Principal", () => {
  it("Mostrar o nome do banco", () => {
    // renderiza o componente
    render(<App />);
    // verifica se a string passada como input está no documento HTML
    expect(screen.getByText("ByteBank")).toBeInTheDocument();
  });
});
