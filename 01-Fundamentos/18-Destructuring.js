const pessoa = {
  nome: 'Brendo',
  idade: 20,
  endereco: {
    logradouro: 'Rua carlos',
    numero: 61,
    casas: [
      1,
      2,
      3,
    ]
  }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: name, idade: age } = pessoa; // mudando o nome da constante/variável
console.log(name, age);

/*
Desestruturando objetos que estão dentro de outros objetos

const { endereco: { logradouro, numero, casas: [ casa1, casa2, casa3 ] } } = pessoa;
console.log(logradouro, numero); 

ou

const { endereco } = pessoa;
const { logradouro, numero, casas } = endereco;
const [ casa1, casa2, casa3 ] = casas;
console.log(endereco, logradouro, numero, casas, casa1, casa2, casa3);
*/

// Usando destructuring em função

function rand({ min, max }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand({
  min: 40,
  max: 100,
}));

const obj = {
  min: 100,
  max: 200,
};

console.log(rand(obj));
