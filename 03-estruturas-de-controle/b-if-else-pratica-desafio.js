//Usar as estruturas de if... else if... else para suportar as operações

const a = 10;
const b = 20;
const operacao = "%"; // + - * / %;

let resultado;

if (operacao == "*") {
  resultado = a * b;
} else if (operacao == "+") {
  resultado = a + b;
} else if (operacao == "-") {
  resultado = a - b;
} else if (operacao == "/") {
  resultado = a / b;
} else if (operacao == "%") {
  resultado = a % b;
} else {
  resultado = "Você passou uma operação inválida";
}

console.log(resultado);
