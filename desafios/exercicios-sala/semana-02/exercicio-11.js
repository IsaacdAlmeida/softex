const numero1 = parseInt(prompt("Digite o primeiro número:"));
const numero2 = parseInt(prompt("Digite o segundo número:"));
const numero3 = parseInt(prompt("Digite o terceiro número:"));

const maior = Math.max(numero1, numero2, numero3);
const menor = Math.min(numero1, numero2, numero3);

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);