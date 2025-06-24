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