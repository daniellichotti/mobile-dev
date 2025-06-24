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