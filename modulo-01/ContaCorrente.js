export class ContaCorrente {
    agencia;
    // proposta de campos privados usando '#':
    // https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; // convenção adotada pela comunidade dev (não é de fato privado)

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
    }
}