/* 
Calcule a área da circunferência utilizando a seguinte fórmula: 
PI * raio * raio
*/

//Solução 1 - mais pura
let raio = 10;
const PI = 3.141592;

let area = PI * raio * raio;
console.log(
  "O valor da área da circunferência onde o raio é " +
    raio +
    ", é: " +
    area +
    "m²",
);

// Solução 2 = mais prático
let valorRaio = 10;
let areaCirc = Math.PI * Math.pow(valorRaio, 2);
console.log(
  "O valor da área da circunferência onde o raio é " +
    valorRaio +
    ", é: " +
    areaCirc.toFixed(4) +
    "m²",
);
