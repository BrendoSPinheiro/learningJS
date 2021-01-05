let isAtivo = false;
console.log(isAtivo); // imprime false

isAtivo = true;
console.log(isAtivo); // imprime true

isAtivo = 0;
console.log(Boolean(isAtivo)); // imprime false
// ou
console.log(!!isAtivo); // outra forma de testar valores como booleanos

// Valores verdadeiros
console.log('Valores verdadeiros');
console.log(Boolean(3));
console.log(Boolean(-1));
console.log(Boolean(' '));
console.log(Boolean('text'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(Infinity));
console.log(Boolean((isAtivo = true)));

// Valores falsos
console.log('Valores falsos');
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean((isAtivo = false)));
