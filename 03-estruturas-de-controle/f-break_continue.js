// break - sai do contexto atual, laço for, e vai para a próxima estrutura de controle que estiver depois do laço for
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

//continue - interrompe a repetição atual, mas não vai sair do laço for
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
