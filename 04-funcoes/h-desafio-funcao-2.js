//Criar uma função que receberá nota do aluno e retornará o conceito

function retornarNotaParaConceito(nota) {
  switch (Math.ceil(nota)) {
    case 10:
      return "A+";
    case 9:
      return "A";
    case 8:
      return "B+";
    case 7:
      return "B";
    case 6:
      return "C+";
    case 5:
      return "C";
    case 4:
      return "D+";
    case 3:
      return "D";
    case 2:
      return "E+";
    case 1:
      return "E";
    case 0:
      return "F";
    default:
      return "Continue estudando";
  }
}

console.log(`O conceito do aluno é: ${retornarNotaParaConceito(9.5)}`);
console.log(`O conceito do aluno é: ${retornarNotaParaConceito(7)}`);
console.log(`O conceito do aluno é: ${retornarNotaParaConceito(5.1)}`);
