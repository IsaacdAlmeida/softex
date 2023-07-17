# Desafio

## Desafio

Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.

## Resposta

A resposta utiliza laço de repetição __for__ para imprimir a tabuada na tela de acordo com o número que o usuário passar. Aqui está a resposta em portugol:

```portugol
Algoritmo Tabuada

Var
   numero, resultado: inteiro

Inicio
   Escreva("Digite um número inteiro: ")
   Leia(numero)

   Para i de 0 até 9 faça
      resultado <- numero * i
      Escreva(numero, " x ", i, " = ", resultado)
   Fim Para

Fim
```

Aqui está a resposta em Javascript

```js
function tabuada(numero) {
  for (let i = 0; i <= 9; i++) {
    const resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
```

A função poderá ser chamada passando o número desejado como argumento. Por exemplo, para calcular a tabuada do número 5, você pode fazer o seguinte:

```js
tabuada(5);
```

Será impresso no terminal

```bash
5 x 0 = 0
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
```
