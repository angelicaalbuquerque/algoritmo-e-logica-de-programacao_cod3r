//Suponhamos que eu queira ter 3 datas diferentes, mas sem duplicar o método exibir. Como resolver?

const data1 = {
  dia: 26,
  mes: 7,
  ano: 1991,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

const data2 = {
  dia: 09,
  mes: 7,
  ano: 1990,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

const data3 = {
  dia: 08,
  mes: 10,
  ano: 1980,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(data.dia, data.mes, data.ano);
console.log(data.exibir(26, 7, 1991));
