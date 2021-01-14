console.log(`01) ${'1' == 1}`); // imprime true
console.log(`02) ${'1' === 1}`); // imprime falso! estritamente igual (compara valor e tipo)
console.log(`03) ${'3' != 3}`); // imprime falso
console.log(`04) ${'3' !== 3}`); // imprime true
console.log(`05) ${3 < 2}`); // imprime falso
console.log(`06) ${3 > 2}`); // imprime true
console.log(`07) ${3 <= 2}`); // imprime falso
console.log(`08) ${3 >= 2}`); // imprime true

const data1 = new Date(0);
const data2 = new Date(0);

console.log(`09) ${data1 == data2}`); // imprime falso
console.log(`10) ${data1 === data2}`); // imprime falso
console.log(`11) ${data1.getTime() === data2.getTime()}`); // imprime true
console.log(`12) ${undefined == null}`); // imprime true
console.log(`13) ${undefined === null}`); // imprime falso