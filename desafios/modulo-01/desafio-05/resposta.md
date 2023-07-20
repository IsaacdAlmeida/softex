# Desafio

## Desafio

Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

| Jogadores          | Pontos      | Moedas      | enfrentou_chefe    |
| ------------------ | ----------- | ----------- | ------------------ |
| Jogador 1          | 120         | 15          | sim                |
| Jogador 2          | 99          | 200         | não                |
| Jogador 3          | 100         | 5           | sim                |
| Jogador 4          | 101         | 4           | não                |

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

Expressões:
- (   )Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)
- (   )Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)
- (   ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)
- (   ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não)

## Resolução

### (V) Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)
 - Substituindo os valores: (120 >= 100) and (15 >= 5) and (sim == Sim).
 - Todas as condições são verdadeiras, portanto a expressão é verdadeira (V).

### (F) Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)
 - Substituindo os valores: (99 >= 100) and (200 >= 5) and (não == Não).
 - A primeira condição é falsa (99 >= 100), portanto a expressão é falsa (F).

### (V) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)
 - Substituindo os valores: (100 < 100) or (5 < 5) or (sim == Sim).
 - A primeira e segunda condições são falsas, mas a terceira é verdadeira, portanto a expressão é verdadeira (V).

### (V) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não)
 - Substituindo os valores: (101 != 100) or (4 != 5) or not(não == Não).
 - A primeira expressão é verdadeira, como se trata de condicional __ou__ a expressão é verdadeira.
