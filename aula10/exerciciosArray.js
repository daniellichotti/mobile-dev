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

let contador = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 20) {
    contador++ // conta +1 sempre que achar um item maior que 20
  }
}
console.log(contador)

/*
Filtrar pessoas maiores de idade
Crie uma função que recebe uma lista de objetos pessoa com nome e idade, e retorna apenas as maiores de 18 anos.
*/
const users = [
  { name: 'André', age: 20 },
  { name: 'Vinícius', age: 22 },
  { name: 'José', age: 15 },
  { name: 'Lucas', age: 17 }
]

users.forEach(user => {
  if (user.age >= 18) {
    console.log(user)
  }
})

users.filter(user => user.age >= 18).forEach(user => console.log(user))

/* 
Criar um novo array com nomes em maiúsculo
Dado um array de strings, retorne um novo array com os nomes em letras maiúsculas.
usar .toUpperCase() para string ficar maiúscula
*/
const nameList = ['Moisés', 'Leonardo', 'João', 'Glauco', 'Rachel']

console.log(nameList.map(name => name.toUpperCase()))
console.clear()

/* 
Calcular média de notas
Crie uma função que recebe um array de notas e retorne a média. Se a média for maior que 7, retorne "Aprovado", senão "Reprovado".
*/

const scoreList = [7, 6, 7]

function checkScore(list) {
  let soma = 0
  list.forEach(score => soma += score) //é o mesmo que soma = soma + score
  return (soma / list.length) >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(checkScore(scoreList))

