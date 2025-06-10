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
console.clear()

//find
const result = fruits.find((fruit) => fruit === 'banana')
console.log(result)