// 10. Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.

function contarCaracteres(string, caractere) {
    let contador = 0;
    for (let index = 0; index < string.length; index += 1) {
      if (string[index] === caractere) {
        contador += 1;
      }
    }
    return contador;
}

console.log(contarCaracteres('banana', 'n'));
console.log(contarCaracteres('ana', 'n'));
console.log(contarCaracteres('bahia', 'n'));