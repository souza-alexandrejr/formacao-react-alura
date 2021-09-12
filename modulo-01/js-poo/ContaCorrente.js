import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        // chamando o construtor da classe-pai
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
}