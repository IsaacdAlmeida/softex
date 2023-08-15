const calcularPorcentagem = (numero, porcentagem) => {
	const porcentagemAtual = porcentagem/100;
 	const total = numero * porcentagemAtual;
  
  return total;
}

console.log(calcularPorcentagem(90,10))