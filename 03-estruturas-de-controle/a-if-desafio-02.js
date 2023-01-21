/*
Exibir conceito da nota de acordo com a tabela: 
A - entre 9 e 10
B - entre 7 e 8,9
C - entre 5 e 6,9
D - entre 4 e 5,9
D - abaixo de 4,5
*/

const nota = 0.9;

if (nota >= 9 && nota <= 10) {
  console.log("Nota", nota, "| conceito: A");
}

if (nota >= 7 && nota < 9) {
  console.log("Nota", nota, "| conceito: B");
}

if (nota >= 5 && nota < 7) {
  console.log("Nota", nota, "| conceito: C");
}

if (nota >= 4.5 && nota < 5) {
  console.log("Nota", nota, "| conceito: D");
}

if (nota >= 0 && nota < 4.5) {
  console.log("Nota", nota, "| conceito: F");
}
