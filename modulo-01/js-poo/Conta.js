// Classe Abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("A classe Conta não deve ser instanciada diretamente por ser abstrata.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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
            console.log("Depósito de " + valor + " realizado com sucesso!");
            console.log("Novo saldo: " + this._saldo);
        }
    }

    sacar(valor) {
        const taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        if (valor < 0) {
            return 0;
        }
        this._saldo -= taxa * valor;
        console.log("Saque de " + valor + " realizado com sucesso!");
        console.log("Novo saldo: " + this._saldo);
        return valor * taxa;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}