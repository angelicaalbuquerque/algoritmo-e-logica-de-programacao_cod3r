//Suponhamos que eu queira ter 3 datas diferentes, mas sem duplicar o método exibir. Como resolver?

function criarData(dia, mes, ano) {
  return {
    dia,
    mes,
    ano,
    exibir() {
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const d1 = criarData(9, 10, 2010);
const d2 = criarData(22, 11, 1975);
const d3 = criarData(5, 4, 2023);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
