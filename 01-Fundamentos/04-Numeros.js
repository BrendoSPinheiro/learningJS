console.log(7 / 0); // imprime: infinity
console.log('10' / 2); // imprime: 5
console.log('show!' * 2); // imprime: NAN (Not a Number)
console.log(0.1 + 0.7); // imprime 0.79999999 (uma imprecisão)
// console.log(10.toString());
console.log((10).toString()); // precisa colocar o número entre ()

// Usando o Math

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area.toFixed(2)); // toFixed limita as casas decimais