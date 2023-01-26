let nota = 7.2;

//ceil = maior valor inteiro
switch (Math.ceil(nota)) {
  case 10:
  case 9:
  case 8:
  case 7:
    console.log("Parabéns!");
    break;
  case 6:
  case 5:
    console.log("Recuperação");
    break;
  case 4:
  case 3:
  case 2:
    console.log("Reprovado");
  case 1:
  case 0:
    console.log("Muito reprovado");
  default:
    console.log("Continue estudando!");
}
