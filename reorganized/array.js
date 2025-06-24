//Arrays
const idades = [18, 22, 30, 10, 30]
const idadesNew = new Array(90, 70, 80, 100, 80)

console.log(idades)
console.log(idadesNew)

//acessando e modificando elementos de um array
//acessando
console.log(idades[0])

//modificando
console.log(idades)
idades[0] = 15
idades[1] = 40
console.log(idades)

//percorrendo um array
for (let i = 0; i < idades.length; i++) {
  console.log(idades[i])
}


//forEach
idades.forEach(function (idade) {
  console.log(idade)
})


//map
const idadesDobradas = idades.map(function (idade) {
  return idade * 2
})

const idadesTriplicadas = idadesDobradas.map(n => n * 3)

console.log(idadesDobradas)
console.log(idadesTriplicadas)


//array de objetos
const arrayObj = [
  { nome: 'João', idade: 35 },
  { nome: 'Caio', idade: 23 },
  { nome: 'Isabelle', idade: 17 },
  { nome: 'Leonardo', idade: 35 }
]

//acessando itens
console.log(arrayObj)
console.log(arrayObj[0].nome)

//forEach
arrayObj.forEach((usuario) => {
  if (usuario.idade < 18) {
    console.log(`${usuario.nome} não pode dirigir`)
  } else {
    console.log(`${usuario.nome} pode dirigir`)
  }
  console.log(`${usuario.nome} tem ${usuario.idade} anos`)
})

arrayObj.forEach((usuario) => {
  if (usuario.idade >= 18) {
    console.log(usuario)
  }
})

arrayObj.forEach(function (usuario) {
  if (usuario.idade >= 18) {
    console.log(usuario)
  }
})

//Filter
const usersLegalAge = arrayObj.filter(usuario => usuario.idade >= 18)
console.log(usersLegalAge)

const caio = arrayObj.filter(usuario => usuario.nome === 'Caio')
console.log(caio)

const nomes = arrayObj.map(usuario => usuario.nome)
console.log(nomes)

//Arrays podem ter tipos diferentes
const meuArray = [10, 'teste', true]
console.log(meuArray)

//Propriedades e Métodos de arrays
const fruits = ['apple', 'orange', 'banana', 'strawberry']

//length
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[fruits.length - 1])

//sort
console.log(fruits.sort())

//push
console.log(fruits)
fruits.push('lemon')
console.log(fruits)

//pop()
fruits.pop()
console.log(fruits)


//shift()
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift('lemon')
console.log(fruits)


//includes
console.log(fruits.includes('lemon'))
console.log(fruits.includes('apple'))

//indexof
console.log(fruits)
console.log(fruits.indexOf('banana'))

//find
const result = fruits.find((fruit) => fruit === 'banana')
console.log(result)

//slice array.slice(inicio, final)
console.log(fruits)
let newFruits = fruits.slice(0, 2)
let newFruits2 = fruits.slice(3, 5)

console.log(newFruits.concat(newFruits2))
console.clear()

let numbers = [1, 3, 4, 5, 10]
//let numbersList1 = numbers.slice(0, 2)
//let numbersList2 = numbers.slice(3, 5)
//numbers = numbersList1.concat(numbersList2)

//console.log(numbers.slice(0, 2).concat(numbers.slice(3, 5)))

console.log(numbers.slice(-3))

/*
  Somar os números pares de uma lista
  Dado um array de números, some apenas os números pares.
*/

const numbers2 = [10, 2, 15, 16, 30, 33, 36, 40, 41, 43]
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

