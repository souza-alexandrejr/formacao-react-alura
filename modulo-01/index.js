class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
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

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(300);
contaCorrenteRicardo.sacar(200);
contaCorrenteRicardo.sacar(50);

const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1002;

console.log(cliente1);
console.log(cliente2);