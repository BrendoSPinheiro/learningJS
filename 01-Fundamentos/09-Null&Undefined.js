 /**
  * Atribuição por referência
  * 
  * acontece quando trabalhamos com objetos, arrays, funções
  * 
  * b passa a apontar para o mesmo endereço de memoria que a
  */

 const a = { name: 'Brendo' };

 const b = a;

 console.log(b);

 /**
  * Atribuição por valor
  * 
  * acontece quando trabalhamos com os tipos primitivos
  * (number, string, boolean)
  * 
  * d recebe uma cópia do valor de c, ou seja, c tem o seu valor atribuído,
  * d tem o seu valor atribuído e são independentes
  */

let c = 4;

let d = c;

console.log(d); // imprime 4

d = 6;

console.log(`c = ${c} e d = ${d}`); // imprime c = 4 e d = 6

// Undefined
let valor; // quer dizer que a variável está declarada mas não foi inicializada
console.log(valor); // imprime undefined
// console.log(valor2); da erro! (valor2 is not defined) quer dizer que a variável nem foi declarada

// Null
valor = null // quer dizer que a variável foi inicializada mas não aponta para nenhum endereço da memoria ou não tem nenhum valor
console.log(valor); // imprime null

// OBS: sempre que quiser zerar o valor de uma variável que aponta para algum endereço na memória, utilize null.
// OBS2: evitar atribuir undefined. Deixe que a linguagem diga oque é undefined ou não
