// Hoisting - quer dizer "jogar para cima/ lançar para o topo"

console.log(`a = ${a}`);
var a = 10;
console.log(`a = ${a}`);

/*
  O que está acontecendo por debaixo dos panos é::
  var a;
  console.log(`a = ${a}`);
  a = 10;
  console.log(`a = ${a}`);

  o javascript lança a declaração para o topo
*/

console.log('Hoisting com let');
// console.log(`a = ${b}`); // Da erro! com let o hoisting não acontece
let b = 10;
console.log(`a = ${b}`);