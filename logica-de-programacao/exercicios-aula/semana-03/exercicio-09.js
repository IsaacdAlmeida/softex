// Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.

// utilizando recursão

// https://ricardo-reis.medium.com/fun%C3%A7%C3%B5es-recursivas-no-javascript-13a1fc099c9f

function fatorial(numero) {
    if (numero < 0) {
        return -1;
    }

    if (numero === 0) {
        return 1;
    }

    return (numero * fatorial(numero - 1));
}

console.log(fatorial(3));
console.log(fatorial(5));