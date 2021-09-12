import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        // chamando o construtor da classe-pai
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (valor < 0) {
            return; // early return (interrompe a execução do método)
        }
        const taxa = 1.1;
        this._saldo -= taxa * valor;
        console.log("Taxa de serviço aplicada: " + taxa);
        console.log("Saque de " + valor + " realizado com sucesso!");
        console.log("Novo saldo: " + this._saldo);
        return taxa * valor;
    }
}