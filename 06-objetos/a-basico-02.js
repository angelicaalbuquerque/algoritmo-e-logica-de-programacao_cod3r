const produto = {
  nome: "Xiaomi Note 9S",
  preco: 2500,
  desconto: 0.15,
  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
  },
};

console.log(produto.nome);
console.log(produto.precoComDesconto());
