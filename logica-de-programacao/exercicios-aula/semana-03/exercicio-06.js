// 6. Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

function inverteNumero(numero) {
    const numeroInvetido = numero.toString().split('').reverse().join('');

    return numeroInvetido;
}

console.log(inverteNumero(123));