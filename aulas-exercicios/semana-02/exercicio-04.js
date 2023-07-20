const quilometragemInicial = parseFloat(prompt("Digite a quilometragem inicial:"));
const quilometragemFinal = parseFloat(prompt("Digite a quilometragem final:"));
const litrosConsumidos = parseFloat(prompt("Digite a quantidade de litros consumidos:"));
const precoLitroCombustivel = parseFloat(prompt("Digite o preço do litro de combustível:"));

const distanciaPercorrida = quilometragemFinal - quilometragemInicial;
const valorTotalGasto = litrosConsumidos * precoLitroCombustivel;
const consumoCarro = distanciaPercorrida / litrosConsumidos;

console.log(`Distância percorrida: ${distanciaPercorrida} km`);
console.log(`Valor total gasto: R$ ${valorTotalGasto.toFixed(2)}`);
console.log(`Consumo do carro: ${consumoCarro.toFixed(2)} km/l`);