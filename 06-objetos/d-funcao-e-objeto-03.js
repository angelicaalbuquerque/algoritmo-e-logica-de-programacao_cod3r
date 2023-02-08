//Utilizando o conceito de Função Construtora (classe)

function Data(dia = 1, mes = 1, ano = 2023) {
  this.dia = dia; //criando um atributo dia dentro do objeto
  this.mes = mes;
  this.ano = ano;

  this.exibir = function () {
    return `${this.dia}/${this.mes}.${this.ano}`;
  };
}

const d1 = new Data();
const d2 = new Data(24, 5, 1975);
const d3 = new Data(09, 09, 2009);

console.log(typeof d1);
console.log(d1);
console.log(d2);
console.log(d3);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
