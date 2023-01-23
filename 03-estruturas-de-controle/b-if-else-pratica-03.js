const hora = 10;
let saudacao;

// if (hora < 12) {
//   saudacao = "Bom dia";
// } else if (hora >= 12 && hora < 18) {
//   saudacao = "Boa tarde";
// } else {
//   saudacao = "Boa noite";
// }

if (hora < 12) {
  saudacao = "Bom dia";
} else if (hora < 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

console.log(saudacao);
