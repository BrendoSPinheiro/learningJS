for (var cont = 0; cont < 10; cont++) {
  console.log(cont);
}

console.log(`cont = ${cont}`);

// Por conta de que o var só possui o escopo global e de função, conseguimos
// acessar o cont fora do loop.