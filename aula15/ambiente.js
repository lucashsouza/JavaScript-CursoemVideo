let numeros = [5, 8, 4];

// Add na posicao 3
numeros[3] = 6;

// Add na ultima posicao
numeros.push(7)

// Organiza em ordem crescente
numeros.sort()

// Quantidade de elementos 
console.log(`Quantidade: ${numeros.length}`)

console.log(`Vetor [${numeros}]`);

let posicao = numeros.indexOf(8);
console.log(`O valor 8 está na posição ${posicao}`);