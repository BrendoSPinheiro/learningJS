// Coleção de pares chave e valor: <chave>: <valor>
const carro1 = {
  marca: 'Fiat',
  modelo: 'argo',
  ano: 2018,
  caracteristicas: {
    freio: 'abs',
    multimidia: true,
    airbag: true,
  }
}

// Pode-se adicionar atributos dinamicamente

carro1.preco = 50.456;

console.log(carro1);

carro1.acelerar = () => {
  console.log('acelerando');
}

console.log(carro1);