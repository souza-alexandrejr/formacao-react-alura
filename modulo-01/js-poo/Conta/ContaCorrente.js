import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        // chamando o construtor da classe-pai
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // sobrescrevendo o comportamento do método sacar 
    // da classe-mãe, utilizando atributos/métodos protected
    sacar(valor) {
        const taxa = 1.1;
        console.log("Taxa de serviço aplicada: " + taxa);
        return super._sacar(valor, taxa);
    }
}