const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const menorNota = Math.min(nota1, nota2, nota3);
const media = (nota1 + nota2 + nota3 - menorNota) / 2;

let situacao;

if (media >= 7) {
  situacao = "aprovado por média";
} else if (media >= 3) {
  situacao = "prova final";
} else {
  situacao = "reprovado";
}

console.log(`A média do aluno é: ${media.toFixed(2)}`);
console.log(`Situação do aluno: ${situacao}`);