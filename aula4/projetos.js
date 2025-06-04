/*
Calculadora Simples
Descrição: Uma calculadora que faz operações básicas: soma, subtração, multiplicação e divisão.
Conceitos:
Variáveis (armazenar números)
Operadores (aritméticos)
Funções (cada operação pode ser uma função)
*/

// etapa 1 criar as funções de operações
function soma(x, y) {
  return x + y
}

function subtracao(x, y) {
  var z = x - y
  return z
}

function multiplicacao(x, y) {
  return x * y
}

function divisao(x, y) {
  return x / y
}

function exponenciacao(x, y) {
  return x ** y
}
// exponenciação e o resto
//etapa 2 criar as variaveis com os numeros que vamos usar
var primeiroNumero = 2
var segundoNumero = 2

//etapa 3 chamar as funções para fazer as operações e guardar os resultados em uma variavel
var resultadoSoma = soma(primeiroNumero, segundoNumero)
var resultadoSub = subtracao(primeiroNumero, segundoNumero)
var resultadoMult = multiplicacao(primeiroNumero, segundoNumero)
var resultadoDiv = divisao(primeiroNumero, segundoNumero)
var resultadoExpo = exponenciacao(primeiroNumero, segundoNumero)

//etapa 4 mostrar no console os resultados
console.log('O resultado da soma é: ' + resultadoSoma)
console.log('O resultado da subtração é: ' + resultadoSub)
console.log('O resultado da multiplicação é: ' + resultadoMult)
console.log('O resultado da divisão é: ' + resultadoDiv)
console.log('O resultado da exponenciação é: ' + resultadoExpo)

/*
Calculadora de Idade
Descrição: O usuário informa o ano de nascimento e o programa calcula sua idade atual.
Conceitos:
Variáveis (ano atual, ano de nascimento, idade)
Operadores (subtração)
Funções (realizar cálculo)
console.log(date.getFullYear())
*/

//passo 1 criamos um objeto date e nele guardamos uma data
date = new Date()
console.log(date) //mostra toda a data/hora
console.log(date.getFullYear()) //mostra o ano atual
console.log(date.getMonth()) //mostra o mês atual de 0 a 11
console.log(date.getDay()) //0 a 6 onde 0 é domingo
console.log(date.getDate()) //mostra o dia do mes de 1 a 31
console.log(date.getHours()) // retorna a hora
console.log(date.getMinutes()) //retorna os minutos
console.log(date.getSeconds()) //retorna os segundos

//passo 2 criamos nossa função que irá receber o ano de nascimento e retornar a idade
function calculaIdade(nasc) {
  return date.getFullYear() - nasc
}

//passo 3 colocamos no código o ano que desejamos calcular
var anoNasc = 1997

//passo 4 criamos a variável que irá receber a resposta e mostramos no console!
var idade = calculaIdade(anoNasc)
console.log(idade)
console.clear()

/* 
Conversor de Temperatura
Descrição: Converte de Celsius para Fahrenheit e Kelvin vice-versa.
Conceitos:
Variáveis (temperatura)
Operadores (aritméticos)
Funções (conversão)
*/

//passo 1 criamos as funções que transformam de celsius para fahrenheit e kelvin
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15
}

//passo 2 declaramos a variável da temperatura que desejamos converter e atribuimos um valor
var currentDegree = 0

//passo 3 guardamos o resultado da conversão em uma variável e mostramos no console
var degreeInFahrenheit = celsiusToFahrenheit(currentDegree)
var degreeInKelvin = celsiusToKelvin(currentDegree)
console.log(`${currentDegree} em Kelvin é ${degreeInKelvin}`)
console.log(`${currentDegree} em Fahrenheit é ${degreeInFahrenheit}`)

/*
  Conversor de Medidas Simples
Descrição: Quilômetros para metros, metros para centímetros, etc.
Conceitos:
Variáveis
Operadores (multiplicação, divisão)
Funções (realizar conversões)
*/

//passo 1 criamos as funções que transformam km para metros e metros para cm
function kmToMeters(km) {
  var meters = km * 1000
  mToCentimeters(meters, km)
}

function mToCentimeters(m, k) {
  console.log(`${k}km é igual a ${m}m e a ${m * 100}cm`)
}

//passo 2 chamamos a função e passamos o km que queremos transformar para m e cm
kmToMeters(1)
