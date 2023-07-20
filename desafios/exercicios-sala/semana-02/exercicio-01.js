function calcularMediaNotas() {
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));
  
    const media = (nota1 + nota2 + nota3) / 3;
  
    return media;
  }
  
const mediaNotas = calcularMediaNotas();
console.log("A média das notas é:", mediaNotas.toFixed(2));