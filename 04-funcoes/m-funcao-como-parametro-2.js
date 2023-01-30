//Flexibilidade do JS em relação à passagem dos parâmetros

function executar(fn, n1, n2) {
  if (typeof fn === "function") {
    console.log(fn(n1, n2));
  }
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}
executar(somar, 50, 40);
executar(subtrair, 90, 10);
executar(multiplicar, 10, 50);

function bomDia() {
  return "Bom dia!";
}

console.log(bomDia);
console.log(bomDia());
