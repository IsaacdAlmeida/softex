const calcularImpares = () => {
  let contador = 0;

  for (let index = 10; index < 30; index++) {
    if(index % 2 === 1) {
      contador = index + contador
    }  
  }

  return contador;
}