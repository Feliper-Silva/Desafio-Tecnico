// Manipulando Lista

/*
Crie uma função que receba uma lista de números inteiros como parâmetro. Essa função deverá primeiramente 
ordenar os elementos em ordem crescente e após isso, deverá remover os elementos duplicados da lista, mantendo a 
ordem anterior.
 */

function Order(numbers) {
  let numberOrder = [];
  numberOrder = numbers.sort((a, b) => {
    return a - b;
  });
  console.log(numberOrder);

  let duplicate = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) {
        duplicate.push(numbers[j]);
      }
    }
  }
  return duplicate;
}

console.log(Order([8, 5, 10, 5, 2, 4, 4, 3]));
