// escopo: até onde algo está visível/disponível?

/**
 * Var:
 *  - 2 escopos: global e função 
 *  - visibilidade: dentro de um bloco que não seja função, variáveis declaradas com var são visíveis a todos
 *                  dentro de função é apenas visível dentro da função
 */

// Var no escopo global

{
  {
    {
      var teste = 'teste escopo global';
    }
  }
}

console.log(teste); // imprime "teste" pois o var quando declarado fora de uma função é global.

// Var no escopo de função

function teste2() {
  var texto = 'testando escopo de função';
  console.log(texto);
}

teste2();
// console.log(texto); // da erro pois var em escopo de função só é visível dentro da função

// Exemplo

var numero = 1;

{
  var numero = 3;
  console.log('dentro do bloco o número é: ',numero); // imprime número 3
}

console.log('fora do bloco o número é: ',numero); // imprime número 3
