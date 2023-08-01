const nota01 = parseFloat(prompt('Digite sua primeira nota:'));
const nota02 = parseFloat(prompt('Digite sua segunda nota:'));
const nota03 = parseFloat(prompt('Digite sua terceira nota:'));

function exibeResultado(nota) {
  nota < 7 ? alert('reprovado') : alert('aprovado');
}

function calculaMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;

  exibeResultado(media)
}

calculaMedia(nota01, nota02, nota03);

// function exemploVazamento() {
//   for (var i = 0; i < 5; i++) {
//     console.log("Dentro do loop: " + i);
//   }
//   console.log("Fora do loop: " + i);
// }

// exemploVazamento();

// function exemploVazamento() {
//   if (true) {
//     var mensagem = "Esta é uma mensagem";
//     console.log(mensagem); // Saída: "Esta é uma mensagem"
//   }
//   console.log(mensagem); // Saída: "Esta é uma mensagem"
// }

// exemploVazamento();
// console.log(mensagem); // Erro: mensagem is not defined

// function calcularAreaTerreno(largura, comprimento) {
//   var area = largura * comprimento;

//   return area;
// }

// // var largura = parseInt(prompt('Largura'));
// // var comprimento = parseInt(promp('Comprimento'));

// var area = calcularAreaTerreno(10, 10)

// console.log('area é: ' + area);