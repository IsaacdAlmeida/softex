const nomeUsuario = prompt("Digite o seu nome:");
const idadeUsuario = parseInt(prompt("Digite a sua idade:"));
const nomeMae = prompt("Digite o nome da sua mãe:");
const idadeMae = parseInt(prompt("Digite a idade da sua mãe:"));
const nomePai = prompt("Digite o nome do seu pai:");
const idadePai = parseInt(prompt("Digite a idade do seu pai:"));

const idadeMaeQuandoNasceu = idadeMae - idadeUsuario;
const idadePaiQuandoNasceu = idadePai - idadeUsuario;

console.log(`${nomeUsuario}, quando você nasceu, Dona ${nomeMae} tinha ${idadeMaeQuandoNasceu} anos e Seu ${nomePai} tinha ${idadePaiQuandoNasceu} anos.`);