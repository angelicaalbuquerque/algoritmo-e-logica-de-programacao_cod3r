const numeros = [1, 2, 3, 4, 5, 4];

numeros.push(6); //adiciona 6º elemento ao array
console.log(numeros);

numeros[0] = 100; //altera o valor no índice 0
console.log(numeros);

console.log(numeros.join("-")); //junta todos os elementos do array a partir de um determinado símbolo e gera uma string

const numeros2 = numeros.concat(7, 8, 9); //concatenamos elementos do array com outros, mas gera outro array, não mexe no array existente
console.log(numeros); //por isso que esse console.log não mostra nenhum impactos
console.log(numeros2); //array gerado pelo concat

console.log(numeros.includes(10)); //diz se um elemento está incluso em um array
console.log(numeros.includes(6)); //diz se um elemento está incluso em um array

console.log(numeros.indexOf(4)); // retorna o índice do elemento
console.log(numeros.indexOf(4, 4)); // olha o 4 elemento a partir do índice 4
