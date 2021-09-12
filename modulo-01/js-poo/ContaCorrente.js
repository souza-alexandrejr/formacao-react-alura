import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    
    // proposta de campos privados usando '#':
    // https://github.com/tc39/proposal-class-fields#private-fields

    constructor(agencia, cliente) {
        this._agencia = agencia;
        this._cliente = cliente; // usando o acessor para atribuição
        this._saldo = 0;         // convenção adotada pela comunidade dev (não é de fato privado)
        ContaCorrente.numeroDeContas += 1;
    }

    // ENCAPSULAMENTO 

    // dando acesso a um atributo privado de modo controlado
    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    // definindo somente o get do saldo (atributos "read-only")
    get saldo() {
        return this._saldo;
    }
    
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("Depósito de " + valor + " realizado na CC com sucesso!");
            console.log("Novo saldo: " + this._saldo);
        }
    }

    sacar(valor) {
        if (valor < 0) {
            return; // early return (interrompe a execução do método)
        }
        this._saldo -= valor;
        console.log("Saque de " + valor + " realizado da CC com sucesso!");
        console.log("Novo saldo: " + this._saldo);
        return valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}