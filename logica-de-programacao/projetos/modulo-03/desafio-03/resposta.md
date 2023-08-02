# Desafio 03

## Desafio

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

## Resposta

### Fila (FIFO - First-In-First-Out)

- Sequência dos números removidos: [3, 7, 9, 1, 0]

Aqui, o primeiro elemento inserido é o primeiro a ser removido.

- Passo 1: Remover o elemento 3 (primeiro elemento da fila) da Fila: [7, 9, 1, 0]
- Passo 2: Remover o elemento 7 (primeiro elemento da fila) da Fila: [9, 1, 0]
- Passo 3: Remover o elemento 9 (primeiro elemento da fila) da Fila: [1, 0]
- Passo 4: Remover o elemento 1 (primeiro elemento da fila) da Fila: [0]
- Passo 5: Remover o elemento 0 (primeiro elemento da fila) da Fila: []

Podemos criar uma função em Javascript para uma melhor representação:

```js
function esvaziarFila(array) {
  const numerosRemovidos = [];

  while (array.length > 0) {
    numerosRemovidos.push(array.shift());
  }

  return numerosRemovidos;
}

const numeros = [3, 7, 9, 1, 0];
const listaNumerosRemovidos = esvaziarFila(numeros);
console.log("Fila - Números removidos:", listaNumerosRemovidos);
```

### Lista (array)

- Sequência dos números removidos: [3, 7, 9, 1, 0]

Podemos remover os elementos de acordo com a ordem em que foram inseridos, uma vez que podemos acessar os elementos em qualquer posição do array.

- Passo 1: Remover o elemento 3 da Lista: [7, 9, 1, 0]
- Passo 2: Remover o elemento 7 da Lista: [9, 1, 0]
- Passo 3: Remover o elemento 0 da Lista: [9, 1]
- Passo 4: Remover o elemento 9 da Lista: [1]
- Passo 5: Remover o elemento 1 da Lista: []

Podemos criar uma função em Javascript para uma melhor representação:

```js
function esvaziarLista(array) {
  const numerosRemovidos = [];

  while (array.length > 0) {
    numerosRemovidos.push(array.shift());
  }

  return numerosRemovidos;
}

const numeros = [3, 7, 9, 1, 0];
const listaNumerosRemovidos = esvaziarLista(numeros);
console.log("Lista - Números removidos:", listaNumerosRemovidos);
```

### Pilha (LIFO - Last-In-First-Out)

- Sequência dos números removidos: [0, 1, 9, 7, 3]

Nesse caso o último elemento inserido é o primeiro a ser removido.

- Passo 1: Remover o elemento 0 (último elemento) da Pilha: [3, 7, 9, 1]
- Passo 2: Remover o elemento 1 (último elemento) da Pilha: [3, 7, 9]
- Passo 3: Remover o elemento 9 (último elemento) da Pilha: [3, 7]
- Passo 4: Remover o elemento 7 (último elemento) da Pilha: [3]
- Passo 5: Remover o elemento 3 (último elemento) da Pilha: []

Podemos criar uma função em Javascript para uma melhor representação:

```js
function esvaziarPilha(array) {
  const numerosRemovidos = [];

  while (array.length > 0) {
    numerosRemovidos.push(array.pop());
  }

  return numerosRemovidos;
}

const numeros = [3, 7, 9, 1, 0];
const listaNumerosRemovidos = esvaziarPilha(numeros);
console.log("Pilha - Números removidos:", listaNumerosRemovidos);
```

