export class Cliente {
    // não é preciso declarar os atributos na classe,
    // se eles forem definidos no construtor (Js é tipada!)
    
    constructor(nome, cpf, senha) {
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    get cpf() {
        return this._cpf;
    }

    get nome() {
        return this._nome;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    set nome(nome) {
        this._nome = nome;
    }

    autenticar(senha) {
        return senha == this._senha;
    }
}