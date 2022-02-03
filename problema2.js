/*
Determine se uma tabela de Sudoku está valida, ou seja, os elementos inseridos correspondem as regras do jogo. Essas regras são:

Cada linha deve conter dígitos de 1 - 9, SEM repetição;
Cada coluna deve conter dígitos de 1 - 9, SEM repetição;
Todas as noves mini-tabelas devem conter dígitos de 1 - 9, SEM repetição;
*/
function validSudoku(board) {
  let row = {};
  let column = {};
  let box = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];
      if (value !== '.') {
        let cardBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (
          row[`${i}--${value}`] ||
          column[`${j}--${value}`] ||
          box[`${cardBox}--${value}`]
        ) {
          return console.log(false);
        }
        row[`${i}--${value}`] = true;
        column[`${j}--${value}`] = true;
        box[`${cardBox}--${value}`] = true;
      }
    }
  }
  return console.log(true);
}

let board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
let board2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

validSudoku(board1);
validSudoku(board2);
