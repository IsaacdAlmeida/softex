// function calcularAumentoSalario(salarioAtual) {
//     let percentualAumento;
//     let valorAumento;
  
//     if (salarioAtual <= 280) {
//       percentualAumento = 20;
//     } else if (salarioAtual <= 700) {
//       percentualAumento = 15;
//     } else if (salarioAtual <= 1500) {
//       percentualAumento = 10;
//     } else {
//       percentualAumento = 5;
//     }
  
//     valorAumento = (salarioAtual * percentualAumento) / 100;
//     const novoSalario = salarioAtual + valorAumento;
  
//     return {
//       percentualAumento,
//       valorAumento,
//       novoSalario,
//     };
//   }
  
//   const salarioColaborador = 1200;
//   const resultado = calcularAumentoSalario(salarioColaborador);
  
//   console.log("Percentual de aumento aplicado:", resultado.percentualAumento + "%");
//   console.log("Valor do aumento:", resultado.valorAumento);
//   console.log("Novo salário após o aumento:", resultado.novoSalario);

const salarioColaborador = parseFloat(prompt("Digite o salário atual do colaborador:"));

let percentualAumento;

if (salarioColaborador <= 280) {
  percentualAumento = 20;
} else if (salarioColaborador <= 700) {
  percentualAumento = 15;
} else if (salarioColaborador <= 1500) {
  percentualAumento = 10;
} else {
  percentualAumento = 5;
}

const valorAumento = (salarioColaborador * percentualAumento) / 100;
const novoSalario = salarioColaborador + valorAumento;

console.log(`Percentual de aumento aplicado: ${percentualAumento}%`);
console.log(`Valor do aumento: ${valorAumento}`);
console.log(`Novo salário após o aumento: ${novoSalario}`);