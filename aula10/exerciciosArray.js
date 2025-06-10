/*
  Somar os números pares de uma lista
  Dado um array de números, some apenas os números pares.
*/

const numbers = [10, 2, 15, 16, 30, 33, 36, 40, 41, 43]
let soma = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    soma += numbers[i] // é igual a: soma = soma + numbers[i]
  }
}
console.log(soma)

/* 
  Contar quantos elementos são maiores que 20
  Use um loop e condição para contar quantos números são maiores que 20.
*/