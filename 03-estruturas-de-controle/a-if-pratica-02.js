const nota = 8;
const bomComportamento = false;

if (nota >= 7) console.log("Parabéns, você foi aprovado!");
if (nota <= 7) console.log("Você não foi aprovado");

if (nota >= 7 && bomComportamento) console.log("Parabéns!");

if (nota < 7 && !bomComportamento) console.log("Uma pena!");
