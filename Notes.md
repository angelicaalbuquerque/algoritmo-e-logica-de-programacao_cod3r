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

```text
Se eu trabalhar terça E quinta, no sábado eu vou comprar uma TV de 50" e tomar sorvete para comemorar. Se eu trabalhar somente um dos dois dias, eu vou no sábado comprar uma TV de 32" e tomar sorvete. Se eu não trabalhar nenhum dos dois dias, eu não vou comprar TV e nem tomar sorvete, vou ficar em casa.
```

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
