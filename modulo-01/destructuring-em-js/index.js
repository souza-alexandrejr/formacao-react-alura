// Exemplos de Desestruturação de Arrays e de Objetos

const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3 , 5];

// Gerando um array de arrays

const numeros1 = [numerosPares, numerosImpares];
console.log(numeros1);

// Gerando um array de numeros usando o operador 'spread'

const numeros2 = [...numerosPares, ...numerosImpares];
console.log(numeros2);

// Atribuindo valores em múltiplas variáveis simultaneamente

const [num1, num2, outrosNumeros1] = [1, 2, 3, 4, 5];
console.log(num1, num2, outrosNumeros1);    // retorna 1 2 3

const [num3, num4, ...outrosNumeros2] = [1, 2, 3, 4, 5];
console.log(num3, num4, outrosNumeros2);    // retorn 1 2 [3, 4, 5]

// Trabalhando com valores-padrão

const [nome1 = "Juliana"] = [1];
console.log(nome1);

const [nome2 = "Juliana"] = [];
console.log(nome2);

// Trabalhando com Objetos

const pessoa = {
    nome: "Alexandre",
    idade: 26
}

console.log(pessoa);

const pessoa2 = {
    pessoa,
    telefone: 33224455
}

console.log(pessoa2);

const pessoa3 = {
    ...pessoa,
    telefone: 33224455
}

console.log(pessoa3);

// Pegando atributos de objetos

const { nome } = pessoa;
console.log(nome);

const { idade } = pessoa;
console.log(idade);

// Trabalhando com funções

function imprimirDados({ nome, idade }) {
    console.log(nome, idade);
}

imprimirDados(pessoa);
