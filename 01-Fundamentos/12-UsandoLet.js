/**
 * Let:
 *  - 3 escopos: global, bloco e função 
 *  - visibilidade: dentro de um bloco é visível apenas dentro do bloco
 *                  dentro de função é apenas visível dentro da função
 *                  no escopo global é visível por todo o código
 */

var numero = 1;

{
  let numero = 2;
  console.log(numero); // Imprime 2 pois ele pega a variável let que não afeta a variável var com mesmo nome
}

console.log(numero); // Imprime 1 pois let não é visível fora do bloco

// Redeclaração

// variáveis usando let não podem ser redeclaradas no mesmo escopo
let texto = 'teste';
//let texto = 'Estou sendo redeclarado'; // da erro!

console.log(texto);
