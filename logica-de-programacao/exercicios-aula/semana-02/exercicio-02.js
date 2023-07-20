const nome = prompt("Digite o seu nome:");
const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

const media = (nota1 + nota2) / 2;

console.log("Nome do aluno:", nome);
console.log("Média das notas:", media.toFixed(2));