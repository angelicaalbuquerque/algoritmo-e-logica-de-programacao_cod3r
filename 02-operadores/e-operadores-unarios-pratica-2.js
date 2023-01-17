let a = 1;
let b = 2;

console.log(++a === b++);
console.log(a, b);
/**
A expressão é verdadeira porque "a" já veio incrementada. Isso acontece porque "++a" tem mais prioridade de incremento que "b++". 

O que acontece é que "a" inicia com valor de 1 e "b" com valor de 2. Mas a expressão "++a" tem uma prioridade tanto em relação a igualdade quanto ao incremento de "b", por isso a primeira coisa a ser executada é "++a" ser 2: 

Em segundo lugar, é feita a comparação se 2 === 2. Só depois dessa comparação que, aí sim, vai incrementar "b", de forma que na próxima linha "a" fosse continuar valendo 2 e aí sim "b" valeria 3.
 **/
