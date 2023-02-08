class Data {
  dia = 1;
  mes = 1;
  ano = 1970;

  constructor(d, m, a) {
    this.dia = d;
    this.mes = m;
    this.ano = a;
  }
}

const d1 = new Data();
d1.dia = 24;
d1.mes = 3;
d1.ano = 2020;
console.log(d1);

const d2 = new Data(31, 12, 2021); //criado pelo construtor
console.log(d2);

console.log(typeof d1);
console.log(typeof Data);
