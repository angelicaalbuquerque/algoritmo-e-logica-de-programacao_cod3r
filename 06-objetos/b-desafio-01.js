//Criar objeto do tipo Data com três atributos: dia, mês, ano. Dentro desse objeto, deverá conter o método Exibir, que deverá retornar uma string com dia/mes/ano.

const data = {
  dia: 26,
  mes: 7,
  ano: 1991,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(data.dia, data.mes, data.ano);
console.log(data.exibir(26, 7, 1991));
