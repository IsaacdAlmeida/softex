function mostrarMenu() {
  console.log("\nLista de operações:");
  console.log("1: Soma");
  console.log("2: Subtração");
  console.log("3: Multiplicação");
  console.log("4: Divisão");
  console.log("0: Sair");
}

function getOperacao() {
  while (true) {
    const operacao = prompt("Digite o número da operação desejada:");
    const parsedOperacao = parseInt(operacao);
    if (!isNaN(parsedOperacao) && parsedOperacao >= 0 && parsedOperacao <= 4) {
      return parsedOperacao;
    } else {
      console.log("Essa opção não existe. Por favor, escolha uma opção válida.");
    }
  }
}

function realizarCalculo(operacao, num1, num2) {
  switch (operacao) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num2 !== 0 ? num1 / num2 : "Divisão por zero não é permitida.";
    default:
      return 0;
  }
}

function runCalculator() {
  let continuar = true;

  while (continuar) {
    mostrarMenu();
    const operacao = getOperacao();

    if (operacao === 0) {
      continuar = false;
      console.log("Obrigado por utilizar a calculadora. Adeus!");
    } else {
      const num1 = parseFloat(prompt("Digite o primeiro número:"));
      const num2 = parseFloat(prompt("Digite o segundo número:"));

      const resultado = realizarCalculo(operacao, num1, num2);

      console.log(`\nResultado: ${resultado}`);
    }
  }
}

runCalculator();
