const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

let maior = numero1;
let menor = numero2;

if (numero1 < numero2) {
  maior = numero2;
  menor = numero1;
}

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);