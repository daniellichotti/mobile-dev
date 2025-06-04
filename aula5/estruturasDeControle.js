//operadores lógicos
var one = 1
var two = 2

console.log(one == two) //False
console.log(one == 1) //True
console.log(one == '1') //True pq compara o conteudo da variavel e não o tipo
console.log(one === '1') // False pq compara o conteúdo e o tipo
console.log(one != two) // True ! =
console.log(one != 1) // False
console.log(one != '1') // False
console.log(one !== '1') // True

console.log(one < two) // True
console.log(one > two) // False
console.log(one <= two) // True < =
console.log(one >= two) // False > =

var verdadeiro = true
var falso = false
//operador and
console.log(verdadeiro && falso)
//operador or
console.log(verdadeiro || falso)
//operador not
console.log(!verdadeiro)

//Fluxo de controle
//if/else
var date = new Date()
var currentYear = Number(date.getFullYear()) + 3
if (currentYear > 2025) {
  console.log('Erro! Ainda estamos em 2025')
} else if (currentYear == 2025) {
  console.log('Esse é nosso ano!')
} else {
  console.log('Esse ano ja passou')
}

//operador ternário
var age = 18
console.log(age >= 18 ? 'você ja pode dirigir' : 'você não pode dirigir')

//switch
color = 'red'
switch (color) {
  case 'yellow':
    console.log('A cor é amarela')
    break
  case 'red':
    console.log('A cor é vermelha')
    break
  case 'blue':
    console.log('A cor é azul')
    break
  default:
    console.log('É alguma outra cor')
}

//Tratamento de exceções
try {
  //tentei conectar com servidor e bugou
  throw new Error('404 not found')
} catch (error) {
  console.log(error)
  console.log('Não foi possivel processar seu pedido agora, tente novamente mais tarde...')
} finally {
  console.log('fim')
}

//Estruturas de Repetição
//While


let execute = true
let counter = 0
while (execute) {
  console.log(counter)
  counter = counter + 1
  if (counter >= 100) {
    execute = false
  }
}

//execute = true
//loop infinito
while (execute) {
  console.log("Executando o while...")
}

//dowhile executa ao menos 1x pois ele executa primeiro e verifica depois, O while verifica primeiro e executa depois
var value = 10
do {
  value++ //value =10
  console.log(value)
} while (value < 10);

value = 10
while (value < 10) {
  value++ //value =9
  console.log(value)
}

console.clear()
months = ['Janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
for (var step = 1; step < 13; step++) {
  if (step < 10) {
    console.log(`o mês 0${step} é ${months[step - 1]} de ${date.getFullYear()}`)
  } else {
    console.log(`o mês ${step} é ${months[step - 1]} de ${date.getFullYear()}`)
  }
}

