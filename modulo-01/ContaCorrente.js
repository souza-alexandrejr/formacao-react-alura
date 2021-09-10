import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    
    // proposta de campos privados usando '#':
    // https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; // convenção adotada pela comunidade dev (não é de fato privado)

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente; // usando o acessor para atribuição
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

    // definindo somente o get do saldo (protegendo atributos sensíveis)
    get saldo() {
        return this._saldo;
    }
    
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("Depósito de " + valor + " realizado com sucesso!");
            console.log("Novo saldo: " + this._saldo);
        }
    }

    sacar(valor) {
        if (valor < 0) {
            return; // early return (interrompe a execução do método)
        }
        this._saldo -= valor;
        console.log("Saque de " + valor + " realizado com sucesso!");
        console.log("Novo saldo: " + this._saldo);
        return valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}