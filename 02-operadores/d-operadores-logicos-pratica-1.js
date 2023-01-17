let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = "#1 (AND) Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOu = "#2 (OR) Vai pro shopping? ";
resultadoOu += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOu);

let resultadoOuExclusivo = "#3 (XOR) Vai pro shopping? ";
resultadoOuExclusivo += estaEnsolarado != estaEnsolarado;
console.log(resultadoOuExclusivo);

console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);

console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !!true);
console.log(!!!!true);
