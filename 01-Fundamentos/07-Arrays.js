const nomes = ['Brendo', 'Andrei', 'Maisa', 'Jose']; // Criando array com valores pré definidos
console.log(nomes); // imprime ['Brendo', 'Andrei', 'Maisa', 'Jose']
console.log(nomes[0], nomes[3]); // imprime Brendo e Jose

// atribuindo novos valores ao array
nomes[4] = 'Maiara';
console.log(nomes); // imprime [ 'Brendo', 'Andrei', 'Maisa', 'Jose', 'Maiara' ]

// adiciona um valor na última posição do array
nomes.push('Janderson');
console.log(nomes); // imprime [ 'Brendo', 'Andrei', 'Maisa', 'Jose', 'Maiara', 'Janderson' ]

// Mostra a quantidade de elementos no array
console.log(nomes.length); // imprime 6

// Remove o último valor do array e retorna o mesmo
console.log(nomes.pop()); // imprime Janderson
console.log(nomes); // imprime [ 'Brendo', 'Andrei', 'Maisa', 'Jose', 'Maiara' ]
