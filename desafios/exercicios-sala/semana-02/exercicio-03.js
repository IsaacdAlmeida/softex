const salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));
const percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (sem o símbolo de porcentagem):"));

const valorAumento = salarioAtual * (percentualReajuste / 100);
const novoSalario = salarioAtual + valorAumento;

console.log(`O novo salário do funcionário é:, ${novoSalario.toFixed(2)}`);