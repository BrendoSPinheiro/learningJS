const nome = 'Brendo';

// CharAt
console.log(nome.charAt(3)); // imprime o caractere que está no índice 3

// IndexOf
console.log(nome.indexOf('d')); // imprime o índice que está o caractere d

// Concat
console.log(nome.concat(' Souza ').concat('Pinheiro')); // concatena as strings

// Replace
console.log(nome.replace('e', 3)); // substitui um caractere por outro

// Split
console.log('Brendo,Souza,Pinheiro'.split(',')); // divide uma string a partir de um separador e gera um array com os elementos

// Template String ou template literals
console.log(`Olá! Meu nome é ${nome} e tenho 20 anos`);