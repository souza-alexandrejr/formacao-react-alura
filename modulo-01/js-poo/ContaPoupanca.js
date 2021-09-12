import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta { 
    constructor(saldoInicial, cliente, agencia) {
        // chamando o construtor da classe-pai
        super(saldoInicial, cliente, agencia);
    }
}