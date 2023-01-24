//Exemplo indeterminado

const futuro = Date.now() + 1000;
let quantidade = 0;

while (Date.now() < futuro) {
  quantidade++;
}

console.log(
  "quantidade de vezes que o bloco de código foi executado em 1s:",
  quantidade,
);
