/* 
Objetivo é trocar o valor das variáveis de tal forma que o valor da variável A vai valer o valor da variável B.
*/

//Solução 1
let a = 7;
let b = 94;
console.log(a);
console.log(b);

//Solução 2
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

//solução 3
[a, b] = [b, a];
console.log(a);
console.log(b);
