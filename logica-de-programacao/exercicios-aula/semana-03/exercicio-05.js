// 5. Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

function calcularAreaEPerimetro(raio) {
    const pi = 3.14159;
    const area = pi * (raio ** 2);
    const perimetro = 2 * pi * raio;
  
    return { area, perimetro };
  }

const resultado = calcularAreaEPerimetro(10);

console.log('área: ', resultado.area);
console.log('perímetro: ', resultado.perimetro);
