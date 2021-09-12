import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Conta } from "./Conta/Conta.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

// Criando clientes e suas respectivas contas correntes

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1002);

console.log(cliente1);
console.log(cliente2);

// Testando métodos de depósito e saque

contaCorrenteRicardo.depositar(400);
contaCorrenteRicardo.sacar(250);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);

// Testando método de transferências entre CCs

contaCorrenteRicardo.transferir(20, contaCorrenteAlice);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);

// Testando atributos estáticos para o número de CCs

const contaCorrenteAlex = new ContaCorrente();

console.log("Número de CCs criadas: " + ContaCorrente.numeroDeContas);

// Criação de uma conta poupança

const ContaPoupancaRicardo = new ContaPoupanca(400, cliente1, 1001);

// Testando comportamento espećifico da CC vs. CP

ContaPoupancaRicardo.sacar(250);
console.log(ContaPoupancaRicardo);

// Testando erro de instanciamento de uma classe abstrata (Conta)

// const contaExtra = new Conta(400, cliente1, 1001);   // retorna Error

// Testando chamada de método abstrato não implementado pela subclasse

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario);
