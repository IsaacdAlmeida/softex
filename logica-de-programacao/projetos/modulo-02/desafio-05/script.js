console.log('iniciando contagem');

function iniciaContador(segundos) {
  for (let index = segundos; index >= 0; index -= 1) {
    setTimeout(() => {
      if (index > 0) {
        console.log(`A explosão acontecerá em ${index}s`);
      } else {
        console.log('BUM');
      }
    }, (segundos - index) * 1000);
  }
}

iniciaContador(10);