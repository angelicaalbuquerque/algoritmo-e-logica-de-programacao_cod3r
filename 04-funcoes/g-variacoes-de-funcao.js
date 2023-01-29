// #1: função COM parâmetro e COM retorno
function somar(a, b) {
  return a + b;
}
console.log(somar(30, 52));

// #2: função COM parâmetro e SEM retorno
function exibirMultiplicacao(c, d) {
  console.log(c * d);
}

exibirMultiplicacao(10, 21);

// #3: função SEM parâmetro e COM retorno
function retornarDataAtual() {
  return new Date();
}
console.log(retornarDataAtual());

// #4: função SEM parâmetro e SEM retorno
function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual();
