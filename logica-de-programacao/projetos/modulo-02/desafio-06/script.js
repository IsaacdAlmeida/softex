/* Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0. */

function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num2 !== 0 ? num1 / num2 : 0; // Ternário para verificar se a divisão não é feita por 0;
    default:
      return 0;
  }
}

console.log('Soma -----------', calculadora(2, 2, 1));
console.log('Subtração ------', calculadora(2, 2, 2));
console.log('Multiplicação --', calculadora(2, 2, 3));
console.log('Divisão --------', calculadora(2, 2, 4));