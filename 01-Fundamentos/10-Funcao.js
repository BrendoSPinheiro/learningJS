// Função em quase tudo no js
console.log('Funções em quase tudo no js \n');

console.log(typeof Object); // imprime o tipo function

class Objeto {}

console.log(typeof Objeto); // imprime o tipo function

// OBS: Praticamente tudo no javascript é uma função
console.log('-----------------------------------------------------------------------------');
console.log('Funções com e sem retorno \n');
// Função sem retorno
function imprimeNomeCompleto(nomeCompleto) {
  console.log(nomeCompleto);
}

imprimeNomeCompleto('Brendo Souza Pinheiro'); // imprime Brendo Souza Pinheiro
imprimeNomeCompleto(); // Funciona mesmo se não passar o parâmetro, mas loga undefined

// Função com retorno
function montaNomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const nomeCompleto = montaNomeCompleto('Brendo', 'Souza');

const nomeCompleto2 = montaNomeCompleto('Andrei');

imprimeNomeCompleto(nomeCompleto); // imprime Brendo Souza
imprimeNomeCompleto(nomeCompleto2); // imprime Andrei undefined pois não passei o segundo parâmetro na linha 27

// Função com retorno e valor padrão no parâmetro
function soma(num1 = 0, num2 = 0) { // caso não seja passado nenhum parâmetro, são atribuídos a elas o valor padrão, no caso o 0
  return num1 + num2;
}

const soma1 = soma(5, 5); // retorna 10
const soma2 = soma(5); // retorna 5
const soma3 = soma(); // retorna 0

console.log(soma1);
console.log(soma2);
console.log(soma3);

console.log('-----------------------------------------------------------------------------');
console.log('Funções em variáveis \n');
// usando função anônima
const imprimirSoma = function(num1, num2) {
  console.log(num1 + num2);
};

imprimirSoma(5, 10);

// usando arrow function
const imprimeNome = (nome, sobrenome) => {
  console.log(`${nome} ${sobrenome}`);
};

imprimeNome('Brendo', 'Souza');

// usando arrow function com retorno implícito
const subtração = (num1, num2) => num1 - num2;

console.log(subtração(10, 5));
