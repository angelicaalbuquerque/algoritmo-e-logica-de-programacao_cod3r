const notas = [7, 8, 3, 5, 10, 9, 8, 8];

for (let nota of notas) {
  console.log(nota);
}

//acessando valores: of
let valores = "";
for (let nota of notas) {
  valores += nota + " ";
}
console.log(valores);

//acessando índices: in
let indices = "";
for (let indice in notas) {
  indices += indice + " ";
}
console.log(indices);
