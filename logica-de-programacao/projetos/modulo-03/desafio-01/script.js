// Você deve criar três listas em JavaScript:

// 1. para guardar os nomes de dez pessoas;
// 2. para guardar as suas idades;
// 3. para guardar as suas cores favoritas.

// Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

const nomes = ['Ana', 'Breno', 'Camila', 'Diego', 'Esdras', 'Flávio', 'Guilherme', 'Horácio', 'Isaac', 'Jane'];
const idades = [25, 30, 22, 28, 32, 27, 35, 20, 29, 24];
const coresFavoritas = ['azul', 'verde', 'amarelo', 'vermelho', 'roxo', 'laranja', 'rosa', 'preto', 'branco', 'marrom'];

console.log('Nomes: ', nomes);
console.log('Idades: ', idades);
console.log('cores Favoritas: ', coresFavoritas);

nomes[0] = 'Julia';
coresFavoritas[coresFavoritas.length - 1] = 'preto';
nomes[3] = 'Alonso';
idades[2] = 100;

// const coresImpressas = coresFavoritas.map((item, index) => `cor n° ${index + 1} - ${item}`); // imprime mais bonito no terminal
// console.log(coresImpressas);

console.log(nomes);
console.log(coresFavoritas);
console.log(idades);