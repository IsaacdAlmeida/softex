# Desafio

## Desafio

Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.

## Solução

```portugol
  se capacete = "Sim" então
     escreva "O meio de transporte escolhido é a moto."
  senao
     escreva "Cabe apenas uma pessoa?"
     leia umaPessoa
     
     se umaPessoa = "Sim" então
        escreva "É pesado?"
        leia pesado
        
        se pesado = "Sim" então
           escreva "O meio de transporte escolhido é o trator."
        senao
           escreva "Tem pedal?"
           leia pedal
           
           se pedal = "Sim" então
              escreva "O meio de transporte escolhido é a bicicleta."
           senao
              escreva "Não foi possível determinar o meio de transporte."
           fimse
        fimse
     senao
        escreva "Não foi possível determinar o meio de transporte."
     fimse
  fimse
```
