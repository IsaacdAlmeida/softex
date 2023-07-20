const temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));

const temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

console.log(`A temperatura em graus Celsius é: ${temperaturaCelsius.toFixed(2)}°C`);