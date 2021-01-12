console.log(typeof Object); // imprime function
console.log(typeof new Object); // imprime object

const Cliente = function() {}
console.log(typeof Cliente); // imprime function
console.log(typeof new Cliente); // imprime object

class Produto {}
console.log(typeof Produto); // imprime function
console.log(typeof new Produto()); // imprime object

/*
  - Além da forma literal de criar um objeto, a outra forma de se criar um objeto
  é a partir de função.
  - a partir de uma função, pode-se instancia-la e ter um objeto com suas próprias
  variáveis e método
  - para acessar funções e atributos de um objeto instância de uma função, é preciso
  adiciona-los ao this da função

  exemplo:
  function Animal() {
    var vivo = true; não é acessível
  
    this.estaVivo = function() { return vivo } é acessível
  }
*/

