function iniciarVotacao() {
    const candidatos = {
      candidato_X: 0,
      candidato_Y: 0,
      candidato_Z: 0,
      branco: 0
    };
  
    let finalizarVotacao = false;
  
    while (!finalizarVotacao) {
      const voto = prompt("Digite o número do candidato (1 para candidato_X, 2 para candidato_Y, 3 para candidato_Z ou qualquer outro número para voto branco):");
  
      if (voto === null) {
        finalizarVotacao = true;
        continue;
      }
  
      const numeroVoto = parseInt(voto);
  
      if (isNaN(numeroVoto)) {
        alert("Voto inválido! Por favor, digite um número válido.");
        continue;
      }
  
      switch (numeroVoto) {
        case 1:
          candidatos.candidato_X += 1;
          break;
        case 2:
          candidatos.candidato_Y += 1;
          break;
        case 3:
          candidatos.candidato_Z += 1;
          break;
        default:
          candidatos.branco += 1;
          break;
      }
    }
  
    let vencedor = "";
    let maiorVotos = 0;
  
    for (const candidato in candidatos) {
      if (candidatos[candidato] > maiorVotos) {
        maiorVotos = candidatos[candidato];
        vencedor = candidato;
      }
    }
  
    console.log("Resultados da eleição:");
    console.log(candidatos);
    console.log("Vencedor: ", vencedor);
  }
  
  iniciarVotacao();
  