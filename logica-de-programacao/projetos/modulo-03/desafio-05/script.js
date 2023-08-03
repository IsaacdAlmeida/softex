// Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

// Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

// Codifique a solução mais eficiente para buscar o número 20 no array.

const listaDeNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]; // lista desordenada, melhor opção é fazer uma busca linear.

function encontraNumero(numeroDesejado, arrayDeNumeros) {
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] === numeroDesejado) {
      return `O número ${numeroDesejado} está no índice ${index}`
    }
  }

  return 'Número não encontrado';
}

console.log(encontraNumero(20, listaDeNumeros));
