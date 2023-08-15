list = [1, -5, 2, 0, -10, 1]

const retornarArrayDePositivos = (arr) => {
  arrayDePositivos = arr.filter((item) => item > 0)

  return arrayDePositivos;
}

console.log(retornarArrayDePositivos(list));