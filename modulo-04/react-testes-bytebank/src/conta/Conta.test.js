import React from "react";
import Conta from "./Conta";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Componente de Conta", () => {
    it("Exibir o saldo da conta com a formatação monetária", () => {
        render(<Conta saldo={1000}/>);
        const saldo = screen.getByTestId("saldo-conta");
        expect(saldo.textContent).toBe("R$ 1000");
    }),
    it("Chama a função de realizar transação quando o botão é clicado", () => {
        // Criando um mock da funcao 'realizarTransacao'
        const funcaoRealizarTransacao = jest.fn();

        // Renderiza o componente passando a função mock
        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>);

        // Simulando o clique no botão
        fireEvent.click(screen.getByText("Realizar operação"));

        // Verificando se a função foi chamada
        expect(funcaoRealizarTransacao).toHaveBeenCalled();

        // Também podemos testar quantas vezes ela foi chamada utilizando:
        // expect(mockFuncao).toHaveBeenCalledTimes(quantidade)
    })
})