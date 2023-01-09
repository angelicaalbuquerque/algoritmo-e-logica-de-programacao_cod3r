let preco = 19.9;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto);

/* 
O preço cheio do produto é 100%. 

O símbolo de % significa divido por 100.

Se eu tenho um desconto de 40% eu posso representar da seguinte maneira 40/100 (40 por cem, ou porcento).

Logo, 40/100 = 0.4.

Se 100% é 1 e 40% é 0.4, para calcular o preço do produto com quarenta por cento eu posso fazer 1 - 0.4 = 0.6.

Então basta eu multiplicar o valor total por 0.6 que terei o equivalente ao 60% do preço, que é 100% - 40%.
*/

let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria);
