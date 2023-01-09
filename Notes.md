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

## Conceitos

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

## Trabalhando com dados

Para armazenar uma informação, podemos utilizar variáveis e constantes. Uma vez que esse determinado espaço de memória é armazenado, podemos referenciar esse espaço pelo nome que foi dado.

A primeira parte da variável é a palavra reservada (var, let ou const) e a segunda o identificador (nome dessa variável). Com o sinal de "=" você atribui um valor a essa variável.

````JS

```JS
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precoFinal = preco + imposto;

console.log(quantidade);
//retorno: 10

console.log(precoFinal * quantidade);
//retorno 79
````
