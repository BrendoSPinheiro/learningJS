for (let cont = 0; cont < 10; cont++) {
  console.log(cont);
}

// console.log(`cont = ${cont}`); // Da erro! pois o cont foi criado com let, sabe-se
// que variáveis criadas com let tem escopo global, de bloco e de função. E por isso
// não conseguimos acessar ela fora do bloco for.

console.log('---------------------------------------------------')

const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[2](); // imprime 2
funcs[8](); // imprime 8
//console.log(i); // da Erro "i is not defined"