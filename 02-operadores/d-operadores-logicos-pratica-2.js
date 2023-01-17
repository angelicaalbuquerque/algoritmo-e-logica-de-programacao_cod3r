let t1 = true;
let t2 = true;

let comprarTV50 = t1 && t2;
console.log('Vamos comprar a TV 50"?', comprarTV50); //AND

let comprarTV32 = t1 || t2;
console.log('Vamos comprar a TV 50"?', comprarTV32); //XOR

let tomarSorvete = t1 || t2;
console.log("Vamos comprar sorvete", tomarSorvete); //OR

let ficarEmCasa = !tomarSorvete;
console.log("Vamos ficar em casa?", ficarEmCasa); //OR
