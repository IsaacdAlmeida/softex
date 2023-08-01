// 7. Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).

function contaVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const palavraMinuscula = palavra.toLowerCase();

    let contador = 0;

    for (let index = 0; index < palavraMinuscula.length; index += 1) {
        if (vogais.includes(palavraMinuscula[index])) {
            contador += 1;
        }
        
    }

    return contador;
}

console.log(contaVogais(banana));
console.log(contaVogais(beterraba));
console.log(contaVogais(tatu));

function contaVogaisComRegex(palavra) {
    const vogaisRegex = /[aeiouáàâãéèêíïóôõöúçñ]/gi 
    const vogaisEncontradas = palavra.match(vogaisRegex);
    const quantidadeDeVogais = vogaisEncontradas.length;

  
    return quantidadeDeVogais;
}

console.log(contaVogaisComRegex('pá'));
console.log(contaVogaisComRegex('banana'));
console.log(contaVogaisComRegex('beterraba'));
console.log(contaVogaisComRegex('pépipopú'));