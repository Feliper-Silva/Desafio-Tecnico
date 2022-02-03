# Desafio de Lógica

## Problema 1:

Passo-a-passo

- Criar Função que recebe o array.
- Colocar o Array em ordem crescente.
  - Utilizei o metodh sort() para ordem.
- Exibir os números duplicados no array.
  - usando o for para percorrer o array e fazer a comparação dos números e colocar o resultado dentro de uma variavel duplicate com o method push()
- Retornando na função a variavel duplicate.

Prova de Teste:

```bash
[8, 5, 10, 5, 2, 4, 4, 3]
```

Resultado:

- Em ordem

```bash
[2, 3, 4, 4, 5, 5, 8, 10]

```

- Somento os duplicados na ordem anterior

```bash
[4, 5]
```

## Problema 2:

Passo-a-passo

- Criar Função que recebe o sudoku.
  - parametro : (board)
- Variaveis criadas:
  - row, column, box
- Percorrer o array do sudoku
  - Utilizei o for
  - Criei a variavel value para receber o parametro da função(board)
  - Condição dentro do for, SE value != '.'
    - Verifica se e um Sudoko Invalido:
      - E não tiver nenhum número repetido na mesma linha
      - E não tiver nenhum número repetido na mesma coluna
      - Se for invalido retornara console.log(false);
      ```bash
      false
      ```
    - Se passar não passar pela verificação acima
      - Sudoku valido.
      - retornara consol.log(true)
      ```bash
      true
      ```

## Sudoku utilizados:

```bash
   board =
   [["5","3",".",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

   output: true
```

```bash
board =
   [["8","3",".",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

   output: false
```
