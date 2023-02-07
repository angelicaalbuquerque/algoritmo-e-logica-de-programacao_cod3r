const cliente = {
  codigo: 17171,
  nome: "Antony",
  vip: true,
  endereco: {
    logradouro: "Pampulha",
    numero: 123,
    complemento: "Rua Ali Perto - BH",
    pontosRef: [
      {
        nomeRefX: "Supernosso Lourdes",
        muitoProximo: true,
      },
      {
        nomeRefY: "Droga Raia Lourdes",
        muitoProximo: false,
      },
    ],
  },
};

console.log(cliente["endereco"]["logradouro"]);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0].muitoProximo);
console.log(cliente.endereco.pontosRef[0].nomeRefX);
