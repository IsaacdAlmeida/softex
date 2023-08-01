// Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.
// Use a fórmula: M = C * (1+i)t
// Onde:
// C = Capital inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.

function calcularRetornoInvestimento(capital, taxa, tempo) {
    const montante = capital * ((1 + (taxa/100)) ** tempo);

    return montante.toFixed(2);
  }

console.log(calcularRetornoInvestimento(100, 10, 12));