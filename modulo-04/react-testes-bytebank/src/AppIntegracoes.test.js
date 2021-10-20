import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "./App";
import api from "./api";

// Criando mock da API com o Jest
jest.mock('./api');

describe("Requisições para API", () => {
    // Usando async por se tratar uma chamada assíncrona
    it("Exibir lista de transações através da API", async () => {
        api.listaTransacoes.mockResolvedValue([
          {
            "valor": "10",
            "transacao": "saque",
            "data": "10/08/2020",
            "id": 1
          },
          {
            "transacao": "deposito",
            "valor": "20",
            "data": "26/09/2020",
            "id": 2
          }
        ]);

        render(<App />);

        // Avisando quando a chamada assíncrona for realizada com o await
        // Timeout padrão de 1 segundo
        // A query 'findBy' retorna uma promise que é completada quando o elemento
        // é encontrado, dessa forma nosso teste espera até que o componente esteja
        // disponível.
        expect(await screen.findByText("saque")).toBeInTheDocument;

        expect(screen.getByTestId("transacoes").children.length).toBe(2);
    })
})