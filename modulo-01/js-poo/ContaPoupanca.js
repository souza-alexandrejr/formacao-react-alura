export class ContaPoupanca { 
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("Depósito de " + valor + " na CP realizado com sucesso!");
            console.log("Novo saldo: " + this._saldo);
        }
    }

    sacar(valor) {
        if (valor < 0) {
            return; // early return (interrompe a execução do método)
        }
        this._saldo -= valor;
        console.log("Saque de " + valor + " realizado da CP com sucesso!");
        console.log("Novo saldo: " + this._saldo);
        return valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}