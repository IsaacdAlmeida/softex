const idade = parseInt(prompt("Digite a sua idade:"));

const podeDoarSangue = idade >= 18 && idade <= 67;

if (podeDoarSangue) {
  console.log("Você pode doar sangue!");
} else {
  console.log("Você não pode doar sangue.");
}w