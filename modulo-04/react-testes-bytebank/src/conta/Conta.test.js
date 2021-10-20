import React from "react";
import Conta from "./Conta";
import { render, screen } from "@testing-library/react";

describe("Componente de Conta", () => {
    it("Exibir o saldo da conta com a formatação monetária", () => {
        render(<Conta saldo={1000}/>);
        const saldo = screen.getByTestId("saldo-conta");
        expect(saldo.textContent).toBe("R$ 1000");
    })
})