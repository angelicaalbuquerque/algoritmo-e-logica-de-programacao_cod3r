function semRetorno() {
  console.log("Função foi chamada");
}

let a = 3;
let b = a * 7 + 10;
let c = semRetorno();
let d = a * 7 + 10 - semRetorno();

console.log(a, b, c, d);
