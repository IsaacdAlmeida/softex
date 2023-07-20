# Desafio 03

## Desafio

Em uma inscrição, o usuário informou os seguintes dados:

- Nome: José Almeida da Silva
- CPF: 12345678900
- RG: 9517530
- Altura: 1,78
- Endereço: Rua A, 380 – Centro – Recife/PE

No algoritmo, descreva como será:

1. A proposta das variáveis;
2. Elaborada a declaração das variáveis;
3. Utilizado o comando de atribuição.

## Resolução

```portugol
algoritmo Inscricao
var
    nome, endereco: caractere
    cpf, rg: inteiro
    altura: real

inicio
    // Proposta das variáveis:
    // nome: armazenará o nome completo do usuário
    // cpf: armazenará o CPF do usuário
    // rg: armazenará o RG do usuário
    // altura: armazenará a altura do usuário
    // endereco: armazenará o endereço completo do usuário
    
    // Declaração das variáveis:
    nome <- "José Almeida da Silva"
    cpf <- 12345678900
    rg <- 9517530
    altura <- 1.78
    endereco <- "Rua A, 380 - Centro - Recife/PE"
    
    // Utilização do comando de atribuição:
    // Atribuição dos valores fornecidos pelo usuário às variáveis
    
    // Apresentação das informações cadastradas
    escreva("Informações da inscrição:")
    escreva("Nome: ", nome)
    escreva("CPF: ", cpf)
    escreva("RG: ", rg)
    escreva("Altura: ", altura)
    escreva("Endereço: ", endereco)

fimalgoritmo
```
