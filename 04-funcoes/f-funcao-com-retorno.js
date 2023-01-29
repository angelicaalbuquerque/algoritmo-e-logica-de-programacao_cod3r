function sempreRetornaUm() {
  return 1;
}

let valor = sempreRetornaUm();
console.log(valor);

function textoOuNumero(retornaTexto) {
  // return retornaTexto ? "Sou um texto!" : 123;
  if (retornaTexto) {
    return "Sou um texto!";
  }

  return 123;
}

console.log(textoOuNumero(false));
