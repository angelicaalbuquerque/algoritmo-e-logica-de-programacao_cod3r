const numeros = [1, 2, 3, 4, 5, 6];

// Formas de percorrer um array:

//Forma 1:
// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

//Forma 2:
// for (let n of numeros) {
//   console.log(n);
// }

//Forma 3-a: criando uma função para chamar dentro do forEach
function praCadaElemento(elemento, indice, arrayCompleto) {
  console.log(elemento, indice, arrayCompleto);
}

numeros.forEach(praCadaElemento);

//Forma 3-b: passando função anônima diretamente como parâmetro
numeros.forEach(function (el, i, a) {
  console.log("forEach", el, a);
});
