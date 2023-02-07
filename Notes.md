## Visão Geral de Algoritmos e Estrutura de Dados

> 💡 <br/> Algoritmo = verbo, ação, é o processar das coisas;<br/> Estrutura de Dados = forma de organizar os dados.

### Algoritmo

É uma sequência de passos que fazem um determinado processamento para sair de um local para outro.

Algoritmo suporta repetições, podendo repetir X vezes ou até que uma condição seja atendida.

Também é possível tomar decisões com algoritmos, podendo escolher um passo em detrimento de outro passo e escolher um passo em detrimento de não fazer nada.

Algoritmo não é software. Existem algoritmos da vida real, como o trajeto de casa para o trabalho, seguir uma receita de bolo ou, até mesmo, escolher SEDEX ou PAC para enviar um pacote.

A integração que existe entre algoritmos e dados é muito importante. Os dados são as entradas, o processamento é feito por algoritmos que, por sua vez, geram uma saída (que também são dados). Por exemplo, "me dê a hora certa no Time Zone X": você pode passar um Time Zone diferente do seu original e aí você tem a hora atual daquele Time Zone.

Existem também algoritmos que recebem entradas, mas não geram nenhum saída, assim como existem algoritmos que não recebem absolutamente nada de entrada e geram uma saída - por exemplo: buscar a hora certa sem passar nenhum Time Zone.

Existem algoritmos também que não têm nenhuma entrada e que não têm nenhuma saída e que são extremamente importantes.

Algoritmos podem ser representados por fluxogramas, linguagem natural (português, inglês, espanhol) e linguagem artificial (Java, C#, Go). Entretanto, a natural tem muita ambiguidade, o que não acontece com a artificial. Também é possível através de pseudo-linguagem. Por exemplo:

```pseudo
1 Algoritmo "SomaDoisValores"
2 declare
3 soma, a, b: inteiro
4 início
5 escreva("Digite dois números: ")
```

#### Algoritmo vs Liguagem de Programação

Algoritmo é baixo nível e mais próximo do computador e do mundo do binário. Linguagem é alto nível e mais próximo do programador.

Então não é o resultado que diz o algoritmo, é aquilo que você quer atingir e também a escolha da linguagem.

### Estrutura de Dados

Uma vez que dado é uma coisa e estrutura de dados é outra, **a estrutura de dados visa organizar e administrar os dados**, trazer ordem e estrutura dos dados.

Exemplos:

- _Saiu a lista de aprovados no concurso_. A lista tem os dados. A estrutura dos dados vai garantir que essa ordem seja correta;
- _A fila no banco está imensa_. A fila tem uma sequência, o primeiro que chega é o primeiro que vai sair da fila (FIFO - First In, First Out);
- _Tenho uma pilha de livros para ler_. O livro posto por último será o primeiro a ser lido. A estrutura é LIFO - Last In, First Out;
- _Sistema de arquivos do computador_. O sistema de arquivos é uma estrutura de dados que organiza os dados em pastas e subpastas, sendo essa a estrutura de árvore;
- _Tabelas_. Organizando os dados em colunas e linhas.

Estruturas de dados básicas são os blocos de construção: números inteiros e reais, letras e sequência de letras, valores booleanos,.

> 💡 Tem linguagens de tipagem dinâmica que vão trabalhar os dados de forma flexível (um dado apontado para diferentes tipos), mas tem linguagens que são mais rigorosas (se um dado for inteiro, a natureza desse tipo não pode ser mudada).

**Você armazena os dados em variáveis e constantes para que você consiga rotular um determinado valor**, que vai estar armazenado na memória do computador, e em cima desses valores rotulados você vai poder fazer operações.

Essas operações são chamadas de operações de atribuição, aritméticas, lógicas e relacionais.

📌 Resumo:

- Os dados são armazenados em variáveis e constantes;
- Os dados são regidos pelas estruturas de dados, que vão dar ordem/administrar os dados e dizer como eles vão se comportar para estarem aderentes àquela estrutura;
- Os dados serão atribuídos a uma determinada variável/constante e utilizados para fazer operações.

Lembrando que também é possível criar estruturas personalizadas, por exemplo, mapeamento de um cliente e um produto.

## Conceitos iniciais

### Sentença de código vs Bloco de código

Analogia - como um livro é organizado: Um livro é organizado utilizando letras, que vão formar as palavras, que vão formar as frases, que vão formar os parágrafos, que vão formar as seções, que vão formar os capítulos, que vão formar o livro.

Essas frases podem ser terminadas com pontos e com vírgulas, por exemplo. Então, na analogia, as frases formam os parágrafos. Trazendo para o mundo da programação, a sentença de código seria a frase e o bloco de código o parágrafo. Sendo assim:

> 💡 Um parágrafo é, então, um agrupamento de frases. Da mesma forma que um bloco de código é um agrupamento de sentenças de código.

Exemplo: tenho 3 sentenças de código no código abaixo:

```JS
console.log("Bom dia!");
console.log("Boa tarde!");
console.log("Boa noite!");
```

E assim como uma frase em linguagem natural pode ocupar várias linhas, uma sentença de código pode também ocupar várias linhas.

> ⚠️ Uma sentença de código, como JavaScript, pode ou não terminar com ';'. Já o Java, por exemplo, é obrigatório terminar uma sentença de código com ';'.

Assim como algoritmo é uma sentença de passos, você vai definir uma sequência de sentenças de código para que o computador execute.

Um bloco de código em JavaScript é definido a partir de um par de chaves ({ }) e dentro desse par você pode definir as sentenças de código, ou seja, elas estarão agrupadas dentro de um bloco de código. A ideia de um bloco de código é agrupar várias sentenças dentro de um bloco.

Exemplo: três sentenças dentro de um bloco de código.

```JS
{
  console.log("Bom dia!");
  console.log("Boa tarde!");
  console.log("Boa noite!");
}
```

Abaixo, temos um código que tem 5 sentenças e 2 blocos de código:

```JS
{
  console.log("Passo 1");
  console.log("Passo 2");
  console.log("Passo 3");
}

{
  console.log("Passo 4");
  console.log("Passo 5");
}
```

No momento que tenho um bloco de chaves, você pode também criar um bloco de código dentro do outro, que obrigatoriamente tem que abrir e fechar dentro do bloco externo.

```JS
{
  console.log("sentença no bloco 1");

  { console.log("sentença no bloco 2!");
    { console.log("sentença no Bloco 3, que está dentro do bloco 2") }
  }

  console.log("sentença no bloco 1");
}
```

Assim, temos a visão completa de como um código é organizado:

- Um código é organizado em pastas;
- Essas pastas contém arquivos;
- Esses arquivos contém sentenças de código;
- Essas sentenças de código estão agrupadas em blocos de código.

### Trabalhando com dados

Para armazenar uma informação, podemos utilizar variáveis e constantes. Uma vez que esse determinado espaço de memória é armazenado, podemos referenciar esse espaço pelo nome que foi dado.

A primeira parte da variável é a palavra reservada (var, let ou const) e a segunda o identificador (nome dessa variável). Com o sinal de "=" você atribui um valor a essa variável.

```JS
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precoFinal = preco + imposto;

console.log(quantidade);
//retorno: 10

console.log(precoFinal * quantidade);
//retorno 79
```

### Tipos de dados

Os três tipos mais básicos de dados suportados por JavaScript são números, booleanos e strings (sequência de caracteres). Podemos descobrir o tipo de um dado ou de uma variável utilizando o _typeof_. O _typeof_ é uma palavra reservada do JavaScript.

```JS
let idade = 31;
console.log(typeof idade); //number
console.log(typeof 31);  //number

let estaChovendo = true; // ou false
console.log(typeof estaChovendo); //boolean

let frase = "Eu gosto de chuva";
console.log(typeof frase); //string
```

Os valores de uma variável, se forem _var_ ou _let_, podem ser mutáveis, basta atribuir um novo valor a ela.

```JS
let a = 3;
console.log(a); //3
a = 10;
console.log(a); //10

const b = 18;
console.log(b);
b = 20;
console.log(b); //TypeError: Assignment to constant variable
```

Se você tem um valor dentro do seu programa que você suspeita que ele não precisará ser alterado, a sugestão é priorizar as constantes e criar mais constantes do que variáveis.

Se você realmente precisar alterar, você transforma para a variável. Mas se você acha que tem a possibilidade de não precisar alterar o valor, inicialize-o logo com a constante que somente quando realmente tiver um cenário que seja justificado para alterar aquela variável aí sim você faz essa alteração.

> 💡 É melhor para a saúde do programa você ter mais constantes do que variáveis.

## Operadores

### Classificação dos Operadores

- Binários: _Exemplo: 3 + 4_. Um operador opera em cima de dois operandos.
- Unários: _Exemplo: a++_. Operador opera em cima de um único operando.
- Ternários: _Exemplo: X ? a : b_ O operador "?" opera em cima de três partes (_X_, _a_ e _b_).

### Tipos de Operadores

Os operadores são divididos em 6 grupos:

1. Aritméticos
2. Relacionais
3. Atribuição
4. Lógicos
5. Unários
6. Ternários

#### Aritméticos

<pre>+ - * / %</pre>

Adição, subtração, multiplicação, divisão e módulo (resto da divisão).

Quanto ao módulo:

<pre>10 / 3 = 3</pre>
<pre>10 % 3 = 1</pre>
<pre>33248512 % 2 = 0</pre>
<pre>13 % 2 = 1</pre>

Qualquer módulo 2 com número par a resposta vai ser 0 porque qualquer número par é divisível por dois, não tem resto. E qualquer número ímpar dividido por 2 vai ter resto 1.

#### Relacionais

<pre> > >= < <= == === != !==</pre>

Operadores relacionais são utilizados para comparar valores, o resultado de uma expressão relacional é um valor booleano

<pre>3 == 3 = true</pre>
<pre>3 === "3" = false</pre>

No primeiro, comparamos os valores. No segundo, comparamos o tipo e o valor (e apesar do valor ser igual a 3, o tipo é diferente: um é number outro é string).

#### Atribuição

<pre>let a = 3 + 2;</pre>

O resultado da expressão será atribuído à variavel _a_.

Importante lembrar que nem sempre do lado esquerdo teremos uma variável. Mas 98% dos casos serão assim, onde uma expressão estará ao lado direito e uma variável ao lado esquerdo.

Interessante mostrar que é possível fazer a junção do operador de atribuição com o aritmético, como nos casos abaixo:

<code>let a = a + 3</code> é o mesmo que <code>let a += 3</code> (atribuição aditiva); assim como <code>let a = a - 7</code> é o mesmo que <code>let a -= 7</code> (atribuição subtratitva); assim como <code>let y = y \* 2</code> é o mesmo que <code>let y \*= 2</code> (atribuição multiplicativa) e assim como <code>let y = y / 5</code> é o mesmo que <code>let y /= 5</code> (atribuição divisiva).

#### Lógicos

Como um exemplo, eu tenho que tomar uma decisão e essa decisão será composta por duas partes, ou seja, duas perguntas para responder para chegar a uma decisão ou tomar uma resposta. Supondo que essa pergunta A obrigatoriamente seja verdadeira ou falsa, assim como B, a resposta também terá um resultado verdadeiro ou falso.

Exemplo:

> Se eu trabalhar terça E quinta, no sábado eu vou comprar uma TV de 50" e tomar sorvete para comemorar. Se eu trabalhar somente um dos dois dias, eu vou no sábado comprar uma TV de 32" e tomar sorvete. Se eu não trabalhar nenhum dos dois dias, eu não vou comprar TV e nem tomar sorvete, vou ficar em casa.

Na operação tipo "E" (&&): se A e B forem verdadeiras, a resposta será verdadeira. Se uma das duas for falsa, a resposta será falsa.

Na operação tipo Ou (||): se A ou B forem verdadeiras, a resposta será verdadeira, independente de uma das duas ser falsa. Se as duas forem falsas, a resposta será falsa.

Na operação tipo Ou Exclusivo (!= ou ^): se ambos A e B forem verdadeiras ou falsas, a resposta será falsa. Se uma das duas for verdadeira e a outra falsa, a resposta será verdadeira.

Na operação tipo Not (!): se A for verdadeira, a resposta será falsa. Se A for falsa, a resposta será verdadeira.

#### Ternários

Operador ternário, também conhecido como atribuição condicional, é aquele que possui três operandos. Sua sintaxe é <code>ccondition ? expr1 : expr2</code>, sendo que e condition é true, o operador retornará o valor de expr1; se não, ele retorna o valor de exp2.

### Tipagem Fraca, Forte, Dinâmica e Estática

A tipagem fraca é quando você não precisa especificar o tipo de dado que você está trabalhando. Já a tipagem forte é quando você precisa especificar o tipo de dado que você está trabalhando.

Na tipagem dinâmica, os tipos não são declarados no código e, portanto, conhecidos/checados em tempo de execução.

Na tipagem estática, os tipos das variáveis de um programa são explicitamente definidos no código e, portanto, conhecidos/checados em tempo de compilação.

Importante não confundir: tipagem dinâmica NÃO significa tipagem fraca! Ruby possui tipagem dinâmica e forte, enquanto JavaScript possui tipagem dinâmica e fraca (essa última porque não obriga a criação de uma variável com um tipo específico, deixa isso livre).

> 💡 [Confira este artigo sobre tipagem fraca, forte, dinâmica e estática](https://dev.to/joaoava/tipagem-fraca-forte-dinamica-e-estatica-g8k).

## Estruturas de Controle

### Visão geral das Estruturas de Controle

Imagine que temos um algoritmo e esse algoritmo tem uma sequência de 4 passos (normalmente os passos são executados na ordem como eles foram colocados). Vamos supor que, por algum motivo, você quer que o Passo 2 e Passo 3 só sejam executados em uma determinada situação - por exemplo, quando a nota de um aluno for maior ou igual a 7.

Como resolver isso? A resposta é: usando estruturas de controle.

Se a nota do aluno for maior do que 7, eu quero, por exemplo, que ele execute Passo 2 e Passo 3 e que esses passos sejam executados 10 vezes. Ou seja, agora nós temos uma estrutura de repetição que ainda está dentro da ideia de estruturas de controle.

> 💡 Nós usamos as estruturas de controle para controlar o fluxo da nossa aplicação. Assim você começa a ter um controle maior sobre o que será executado em seu código.

Vamos trabalhar com estruturas de controle Condicionais e estruturas de controle de Repetição.

As **condicionais**, basicamente, vão ajudar a definir quando um código precisa ser executado ou não, seja uma sentença ou um bloco de código. Essas condicionais são feitas por _If_, _Else_ e _Switch_.

Já as estruturas de **repetição** (_loop_), que também vão agir em sentença de código ou bloco de código, vão ajudar a definir quantas vezes um código precisa ser executado. As principais estruturas de repetição são _For_, _While_ e _Do While_.

### Estruturas de controle condicionais

#### Estrutura If

<code>if (expressão)</code>

A expressão sempre vai retornar verdadeiro ou falso. Essa estrutura irá selecionar a próxima coisa que vai aparecer no código, logo na sequência de um _if_ podem aparecer: sentença de código; bloco de código ou outra estrutura de controle.

Se o resultado for <code>true</code>, a estrutura que vem logo depois será executada. Se o resultado for <code>false</code>, a estrutura que vem logo depois não será executada.

#### Estrutura If/Else

```js
if (expressão) {
  // código
} else {
  // código
}
```

A estrutura _if_ tem uma expressão que vai gerar um valor verdadeiro ou falso e executar o que estiver na sequência. Se for verdadeiro, ele executa, se não, ele não faz nada e continua o fluxo da aplicação.

Já no _if_ trabalhando com _else_, se a expressão for falsa, ele vai executar outra estrutura de código ou outra estrutura de controle.

Ou seja, você pode executar uma coisa ou outra, dependendo do resultado da expressão.

### Estruturas de controle de repetição

Laços de repetição são estruturas de controle que permitem executar um bloco de código várias vezes. Eles são muito úteis quando você precisa executar uma mesma tarefa várias vezes, como, por exemplo, imprimir todos os números de 1 a 10.

Tem momentos que teremos uma quantidade determinada de situação (exemplo: ler 10 páginas de um livro) e em casos que teremos quantidade indeterminada (ler as páginas do livro até às 17h, sem saber quantas páginas consegue ler até esse horário).

> 💡 No caso quando temos uma quantidade determinada, preferencialmente usa-se o _for_; já no caso para indeterminados, estão mais otimizadas as estruturas _while_ e _do while_.

#### While

```js
while (expressão) {
  // código
}
```

Enquanto a expressão for verdadeira, o código será executado. Quando a expressão for falsa, o código não será executado e o fluxo da aplicação continua. No exemplo abaixo, teríamos um loop infinito:

```js
while (true) {
  console.log("Laço infinito");
}

console.log("Fim");
```

A diferença do _if_ para o _while_ é que o _if_ é executado uma única vez, enquanto o _while_ é executado várias vezes enquanto a expressão for verdadeira.

Exemplo de contagem com While:

```js
let controle = 1;

console.log("contando de 1 até 10:");

while (controle <= 10) {
  console.log(controle);
  controle++;
}

console.log("~ fim ~");
```

#### For

```js
for (inicialização; condição; incremento) {
  // código
}
```

A primeira parte é a declaração da variável, a segunda a expressão e a terceira o incremento ou a modificação da variável conforme quiser. O _for_ é uma estrutura de repetição que tem uma quantidade determinada de vezes que ele vai ser executado.

Exemplo de contagem com For:

```js
console.log("contando de 1 até 10:");

for (let controle = 1; controle <= 10; controle++) {
  console.log(controle);
}

console.log("~ fim ~");
```

#### Switch

```js
switch (expressão) {
  case valor1:
    // código
    break;
  case valor2:
    // código
    break;
  default:
  // código
}
```

Estrutura de controle voltada para quando se tem múltiplas seleções, sendo que a expressão não é um verdadeiro ou falso, diferentemente do _if_ e _while_, mas sim um valor que pode ser comparado com os valores dos _case_.

O _break_ do switch é para parar a execução do código; caso não tenha o _break_, ele vai executar todos os _case_ abaixo do que foi selecionado.

o _continue_ é para pular a execução do código e ir para a próxima iteração.

## Funções

Função é um bloco de código que tem nome e, uma vez que ele tenha um nome, você pode reutilizá-lo quantas vezes quiser.

> 💡 Sempre associe função com ação. Uma função é uma ação que você pode executar quantas vezes quiser.

### Função vs Algoritmo

Em um algoritmo, nós temos as estruturas de controle e podemos escolher um determinado conjunto de passos e se uma determinada expressão pode acontecer ou não. No caso clássico exemplo da receita de bolo, se você quiser calda de chocolate, você pode seguir para esse passo ou não.

Assim como a receita, na maioria das vezes um algoritmo precisa de "ingredientes" de entrada pra que seja possível executar o paso a passo em cima desses "ingredientes". Essas entradas vão representar os dados.

> 💡 Entretanto, existem algoritmos também que não precisam de nenhum dado de entrada e que também não vão gerar nenhuma saída.

No algoritmo temos uma sequência de passos, que são agrupadas em uma sentença de códigos (executada a partir de um passo) e essas sentenças são agrupadas em blocos de código (executado a partir de um conjunto de passos).

Uma função é um bloco de código que, a partir de agora, passa a ter um nome, e pode ser utilizada quantas vezes for necessário dentro da implementação.

É possível ter funções que:

- Recebem dados e geram saídas;
- Recebem dados e não retornam nada;
- Não recebem dados e retornam algo;
- Não recebem dados e não retornam nada.

### Anatomia da Função

```js
function nomeDaFunção() {
  // sentença de código
}
```

Para definirmos uma função, usamos a palavra reservada _function_ e o nome da função. Dentro dos parênteses, que são obrigatórios, podemos passar parâmetros, que são valores que a função vai receber para executar a tarefa. O bloco de código, que vai ser executado quando a função for chamada, fica entre chaves.

### Entendendo Undefined, NaN e Null

```js
let a;

console.log(a);
```

No código acima, como eu não defini um valor para a variável a o resultado será _undefined_. O _undefined_ é um valor que significa que a variável não tem valor definido, que não foi inicializado.

No caso abaixo, o resultado será _NaN_ (Not a Number), pois o JavaScript não consegue fazer a operação de soma com um valor _undefined_.

```js
let b;
let c = 7;

console.log(b + c);
```

Quando você quer inicializar um valor de uma variável de uma forma explícita, mas sem querer dar nenhum valor pra ele, você pode utilizar o vazio, que é o _null_.

```js
let d = null;
console.log(d);
```

Então, o null é utilizado quando você quer ter um valor vazio, mas você quer dizer que aquele valor foi realmente inicializado.

Agora, caso eu queira somar o valor de _d_ com _c_, o JS vai considerar o nulo como 0 e o resultado será 7.

### Função e Undefined

Quando você não define nada, o que uma função retorna? Uma função retornará _undefined_.

```js
function semRetorno() {
  console.log("Função foi chamada");
}
let exibirFuncaoSemRetorno = semRetorno();
console.log(exibirFuncaoSemRetorno);
```

JavaScript uma linguagem muito flexível e diferente de outras linguagens que tem uma forma mais, digamos, restrita de fazer as coisas. Algumas linguagens quando você diz que não vai retornar nada, você não pode chamar uma função que não retorna nada e tentar atribuir alguma coisa porque se a função não vai retornar nada, não faz sentido você fazer esse tipo de código; só que JavaScript permite isso, retornando _undefined_.

Sendo assim:

> 💡 Mesmo quando você tem uma função que não retorna nada, você ainda pode chamar o código como se ela retornasse alguma coisa e se ela, de fato, não retornar a nada, o valor retornado será _undefined_, que é exatamente a mesma coisa quando você define uma variável e você não inicializa essa variável.

### Função com Retorno

Para retornar o valor de uma função, usamos a palavra reservada _return_.

```js
function sempreRetornaMil() {
  return 1000;
}
let valor = sempreRetornaMil();
console.log(valor);
```

No momento que o código encontra a palavra _return_, ele automaticamente sai do método e não executa nada que vem depois. Por exemplo, se depois do _return_ eu tiver um _console.log_, ele não vai ser executado.

### Variações de Funções

**#1: função COM parâmetro e COM retorno**

```js
function somar(a, b) {
  return a + b;
}
console.log(somar(30, 52));
```

**#2: função COM parâmetro e SEM retorno**

```js
function exibirMultiplicacao(c, d) {
  console.log(c * d);
}

exibirMultiplicacao(10, 21);
```

**#3: função SEM parâmetro e COM retorno**

```js
function retornarDataAtual() {
  return new Date();
}
console.log(retornarDataAtual());
```

**#4: função SEM parâmetro e SEM retorno**

```js
function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual();
```

### Armazenar função em variável

Para isso, teremos uma função anônima, que é uma função sem nome.

```js
let exibirSaudacao = function () {
  console.log("Olá, bom dia!");
};
```

Também é possível armazenar uma função em uma variável e depois chamar essa função através da variável.

### Função como parâmetro

A partir do momento que a gente tem o conceito de que pode armazenar uma função dentro de uma constante ou de uma variável, podemos evoluir essa ideia e passar essa função como parâmetro para a outra função.

Para passar uma função como parâmetro para executar, basta passar o nome da função sem os parênteses.

```js
function executar(funcao) {
  if (typeof funcao === "function") {
    console.log(funcao());
  }
}

function bomDia() {
  return "Bom dia!";
}

executar(bomDia);
```

#### Parâmetros de uma função

No caso abaixo, no momento que eu não passo o 4º parâmetro, ele vai gerar um _NaN_ porque no momento que eu não passo um parâmetro obrigatório o JS vai assumir que esse parâmetro vai ser _undefined_.

```js
function somar(a, b, c, d) {
  return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
```

E como ter um valor diferente de _undefined_ para um parâmetro obrigatório? Basta passar um valor padrão para esse parâmetro.

```js
function somar(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());
```

E se forem passado mais valores, o JS vai ignorá-los e considerar apenas os 4.

### Retornar uma função

No JavaScript é possível retornar uma função dentro de outra.

```js
function retornar() {
  function bomDia() {
    return "Bom dia!";
  }

  return bomDia;
}

console.log(retornar()); //[Function: bomDia]
console.log(retornar()()); // "Bom dia!"
```

#### Curring

> 💡 Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried.

```js
console.log(somar1(5, 4));

function somar2(a) {
  return function (b) {
    return a + b;
  };
}

console.log(somar2(5)(4));

const somarMais10 = somar2(10);
console.log(somarMais10(5));
```

### Qual a diferença entre método e função?

> 💡 Método é uma função que está dentro de um objeto. Um objeto é uma coleção de propriedades.

Em uma analogia com as pastas do computador, assim como dentro da pasta conseguimos armazenar coisas, no objeto conseguimos armazenar coisas. Que coisas são essas? Podem ser funções e atributos (dados).

## Arrays

É uma estrutura de dados que vai ajudar a armazenar várias informações a partir de uma variável. Por exemplo, armazenar diversas notas de alunos.

Em JS, Array é uma estrutura dinâmica, que cresce e diminui de tamanho acordo com a necessidade, em contrapartida da estrutura do Java, que é estática (se você cria um array com 10 posições, ele vai ter sempre 10 posições). No Java, o que é próximo do Array em JS é a estrutura de dados _List_.

O array é uma estrutura indexada, ou seja, cada elemento do array é identificado por um índice. Então, a partir de uma única variável eu consigo acessar valores diferentes.

```js
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];
console.log(notas[0], notas[3]); //7.8 e 9.5
```

Suponhamos que dentro do array de Notas eu tenha 10 notas, eu consigo acessar cada uma dessas notas através de um índice, sempre partindo do 0 e o último elemento do array o tamanho do array menos 1.

#### Possibilidades com array

Em JS, podemos adicionar novos elementos em um array, podemos remover elementos de um array, podemos alterar elementos de um array, podemos criar um array vazio e depois adicionar elementos nele, podemos criar um array com elementos e depois adicionar mais elementos nele.

```js
const nomes = []; //declaração array vazio
console.log(nomes); //[]

nomes[0] = "Leonardo";
nomes[1] = "Antony";
nomes[2] = "Adaíla";
nomes[3] = "Raphael";
nomes[4] = "Milene";
nomes[10] = "Paulo";

console.log(nomes); // [ 'Leonardo', 'Antony', 'Adaíla', 'Raphael', 'Milene', <5 empty items>, 'Paulo' ]
```

Apesar de termos declarado uma constante de notas, seus valores internos podem ser modificados, o que não pode ser modificado é a referência da constante, o valor de notas (por exemplo, alterar para _notas = "teste"_).

```js
notas[4] = 8.7;
console.log(notas); //[ 7.8, 6.7, 10, 9.5, 8.7, 5.8 ]
```

### Array é um objeto

O fato de o array ser um objeto, faz com que ele tenha algumas características interessantes de um objeto.

Da mesma forma que _console_ é um objeto e _log_ é uma função, eu consigo acessar funções que estão dentro do console e, sendo assim, eu também vou conseguir acessar funções que existem dentro do objeto que é o array.

Um exemplo é que é possível acessar a função _push_, que está dentro do array e serve para adicionar um novo elemento no array.

```js
const numeros = [1, 2, 3];

console.log(typeof numeros); //object
numeros.push(4);
numeros.push(5);
numeros.push(10.98);
console.log(numeros); //[ 1, 2, 3, 4, 5, 10.98 ]
console.log(numeros.length); //6
```

### Percorrendo um array

Para percorrer para, por exemplo, calcular a média de todos os alunos de uma turma, vamos precisar utilizar as estruturas de controle. A mais utilizada é a estrutura de repetição _for_.

Nós já vimos que um array é indexado a partir do 0, sendo assim, o último elemento do array é o tamanho do array menos 1.

```js
const numeros = [1, 2, 3, 4, 5, 6, 11];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
```

Forma mais simples:

```js
const notas = [7, 8, 3, 5, 10, 9, 8, 8];

for (let nota of notas) {
  console.log(nota); //7 8 3 5 10 9 8 8
}
```

Percorrendo os índices:

```js
let indices = "";

for (let indice in notas) {
  indices += indice + " ";
}

console.log(indices); //0 1 2 3 4 5 6 7
```

> 💡 Para acessar os valores utilizamos "of", para acessar os índices utilizamos "in".

A versão mais simples ainda do laço _for_ é utilizando o _forEach_, que é uma função que está dentro do array. O _forEach_ recebe uma função como parâmetro e essa função recebe como parâmetro cada elemento do array.

### Métodos do Array

São funções que estão dentro do objeto Array. São funções que podem ser utilizadas para manipular arrays.

Alguns exemplos:

- push - Adiciona um elemento no final do array
- concat - Concatena arrays e gera um novo array
- join - Junta todos os elementos de um array em uma string
- includes - Diz se um determinado elemento pertence ou não a um determinado array
- indexOf - Retorna o índice de um determinado elemento
- splice - Remove elementos dentro de um array
- pop - Remove o último elemento do array e retorna esse último elemento
- forEach - Percorre todos os elementos de um array

> ⚠ Importante sempre se perguntar se o método que você está utilizando modifica o array original ou se ele gera um novo array.

### ForEach

O forEach recebe uma função como parâmetro e essa função recebe como parâmetro cada elemento do array.

Pode ser usado de duas formas:

1: criando uma função para chamar dentro do forEach

```js
function praCadaElemento(elemento, indice, arrayCompleto) {
  console.log(elemento, indice, arrayCompleto);
}

numeros.forEach(praCadaElemento);
```

2: passando função anônima diretamente como parâmetro

```js
numeros.forEach(function (el, _, a) {
  console.log("forEach", el, a);
});
```

> ⚠ Importante saber: a ordem dos elementos é respeitada, ou seja, sempre vou seguir _elemento_, _indice_ e _array_ na passagem de parâmetro. Não consigo, por exemplo, passar um elemento e passar direto um array porque o segundo _elemento_ é sempre um _índice_. O que posso fazer é, caso queira ignorar o índice, por exemplo, passar o sinal de _underline_.

## Objetos

Vamos trabalhar o conceito de objeto fazendo um paralelo com o conceito de array, pois o conceito de objetos é muito importante principalmente para linguagens que utilizam o paradigma de orientação a objetos.

Nós estávamos utilizando o paradigma de programação procedural — um paradigma de programação que se baseia em procedimentos, que são executados numa sequência — e também vimos o paradigma de programação funcional — o problema é dividido em blocos e, para sua resolução, são implementadas funções que definem variáveis em seu escopo e retornam algum resultado.

> 💡 Ler mais sobre os tipos de paradigmas de programação [aqui](https://blog.betrybe.com/tecnologia/paradigmas-de-programacao/).

Para entender o conceito de objeto, vamos relembrar o array. O array é uma estrutura que armazena dados de forma sequencial e é organizado a partir de índices, sendo representado a partir de um par de colchetes []. Temos, então, uma estrutura que a partir do índice conseguimos acessar um valor.

Fazendo um paralelo com array, em JS, um objeto é representado a partir de um par de chaves {}. Em vez de termos uma estrutura indexada de índice/valor, um objeto é organizado a partir de determinada chave, que é um valor textual. Dentro do objeto, essa chave precisa ser única, ou seja, não pode ter duas chaves com o mesmo nome.

### Definindo um objeto

Você tem o atributo e o valor. O atributo/identificador é o nome da chave e o valor é o valor da chave.

```js
const pessoa = {
  nome: "João",
  idade: 20,
  altura: 1.8,
  peso: 80,
};
```

Da mesma forma que um array pode armazenar múltiplas informações na única estrutura, o objeto também é capaz de armazenar múltiplas informações dentro de uma única estrutura.

Além de atributos, podemos criar função dentro de um objeto. Essa função é chamada de método.

> 💡 Os atributos representam as características do objeto e os métodos representam os comportamentos, as ações do objeto. Um objeto, então, é composto por atributos e comportamentos/métodos, conjunto que pode ser chamado de membros.

Um carro, por exemplo, tem atributos como cor, marca, modelo, ano, etc. E tem métodos como ligar, desligar, acelerar, frear, etc.

Assim como em português temos pronomes para nos referenciar a nós mesmos ou nossos próprios atributos (exemplo: "meu nome é Angélica e meu CPF é 12345"), em JS temos a palavra-chave _this_ para referenciar o próprio objeto -- quando você quer referenciar um atributo ou método que pertence ao objeto e você está dentro do objeto você usa essa palavra-chave.

> 💡 A palavra-chave _this_, usada dentro da linguagem JavaScript e também em outras linguagens, é a que faz com que você consiga, a partir do objeto, referenciar a si mesmo. Ou seja, quando o próprio objeto quer acessar os seus próprios atributos, ele vai usar _this_ exatamente para acessar isso. _Algumas linguagens utilizam a palavra \_self_ para fazer essa referência.

E fora do objeto, utilizamos _this_? Não, utiliza-se o nome da variável que está armazenando o objeto.

```js
const produto = {
  nome: "Xiaomi Note 9S",
  preco: 2500,
  desconto: 0.15,
  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
  },
};

console.log(produto.nome);
console.log(produto.precoComDesconto());
```

### Alterando o valor de um objeto

No exemplo abaixo, não podemos alterar o valor da variável da constante _data_, mas podemos alterar um atributo interno de um objeto da seguinte forma:

```js
const data = {
  dia: 1,
  mes: 10,
  ano: 2021,
};

data.dia = 27;
```

Para adicionar um valor dinamicamente a um objeto, fazemos da seguinte forma:

```js
const usuario = {
  email: "aluno@cod3r.com.br",
};

console.log(usuario.email);
console.log(usuario.nome); //undefined porque não foi criado

usuario.nome = "Aluno";

console.log(usuario.nome); //agora passa a exibir o nome do aluno
console.log(usuario); //o atributo nome foi adicionado
```

```

```
