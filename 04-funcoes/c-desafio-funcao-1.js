//1) Criar uma função que vai receber dois parâmetros e, dentro da função, executar um console.log para somar esses parâmetros.

function somar(num1, num2) {
  soma = num1 + num2;
  console.log(`A soma de ${num1} com ${num2} é: ${soma}`);
}

console.log("--------- Somando ---------");
somar(3, 4);
somar(31, 98);

//2) Criar uma função que vai receber dois parâmetros e, dentro da função, executar um console.log mostrando o resultado da subtração desses parâmetros.

function subtrair(num1, num2) {
  subtracao = num1 - num2;
  console.log(`A subtração de ${num1} com ${num2} é: ${subtracao}`);
}

console.log("\n--------- Subtraindo --------- ");
subtrair(11, 7);
subtrair(19, 52);
