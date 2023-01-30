//Suponha que você tenha um sistema para calcular se o aluno está aprovado ou reprovado ou em recuperação. Pra fazer esse calculo, é necessário utilizar 3 notas. A menor nota é descartada e use duas notas para fazer o cálculo. Calcular a média do aluno utilizando as duas maiores notas e mostrar o status: aprovado (se nota >= a 7), recuperação (se nota >= 4 e < 7) e reprovado (se nota < 4).

const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function entregarMenorNota(n1, n2) {
  return n1 <= n2 ? n1 : n2;
}

console.log(entregarMenorNota(nota1, entregarMenorNota(nota2, nota3)));

function calcularMedia(n1, n2, n3) {
  const menorNota = entregarMenorNota(n1, entregarMenorNota(n2, n3));

  if (menorNota === n1) {
    return (n2 + n3) / 2;
  } else if (menorNota === n2) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  }
}

console.log(calcularMedia(nota1, nota2, nota3));

function entregarMediaParaStatus(calcularMedia) {
  if (calcularMedia >= 7) {
    return "Aprovado";
  } else if (calcularMedia >= 4 && calcularMedia < 7) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

const mediaFinal = calcularMedia(nota1, nota2, nota3);
const statusFinal = entregarMediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é: ${statusFinal} `);
