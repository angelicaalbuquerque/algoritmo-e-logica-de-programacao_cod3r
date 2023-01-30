function retornaUmaFuncao() {
  function bomDia() {
    return "Bom dia!";
  }

  return bomDia;
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()()); //a resposta da linha acima é uma função, então se eu chamar duas vezes agora teremos o resultado "bom dia!"
