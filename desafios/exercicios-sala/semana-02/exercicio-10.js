const anoNascimento = parseInt(prompt("Digite o ano de nascimento da pessoa:"));

const ANO_ATUAL = 2023
const MAIOR_IDADE = 18

const idadeAtual = ANO_ATUAL - anoNascimento;
const podeVotar = idadeAtual >= MAIOR_IDADE;

if (podeVotar) {
  console.log("Esta pessoa pode votar este ano.");
} else {
  console.log("Esta pessoa não pode votar este ano.");
}
