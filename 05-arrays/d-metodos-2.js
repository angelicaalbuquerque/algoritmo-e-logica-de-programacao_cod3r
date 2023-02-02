const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

//Remover elementos dentro do array. No exemplo, remover o 2. O primeiro parâmetro é o índice que eu quero remover e o segundo a quantidade de elemntos.
numeros.splice(1, 1);
console.log(numeros);

//Remove o último elemento do array e retorna esse último elemento
numeros.pop();
console.log(numeros);
