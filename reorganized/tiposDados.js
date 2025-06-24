//Tipos de Dados
//String
let userName = 'Jhon Doe'
//Number
let userId = 5 //inteiro positivo
let userId1 = -5 //inteiro negativo
let userId2 = 123.342 //decimal
let userId3 = 123.342 / 'palavra' //NaN
//Bool
var hadId = true
var isLoading = true
var hadId = false
//undefined
var user
//Null
var user = null
//BigInt
var bigInt = 120391029301203901293012

//Concatenação
let firstName = 'Lucas'
let lastName2 = 'Machado'
//console.log(firstName, lastName2)
let userEmail = 'lucasmachado@bing.com'
let message = 'Olá ' + firstName + ' ' + lastName2 + ', seu email é: ' + userEmail
//console.log(message)
//Template Literals
//console.log(`Olá ${firstName} ${lastName2}, seu email é: ${userEmail}`)

//Type Casting
//transformar variavel de um tipo para outro
let value = '10'
console.log(typeof (value))
console.log(typeof (Number(value)))
let newAge = 18
console.log(typeof (age))
console.log(typeof (age.toString()))
console.log(typeof (String(age)))

let option = '1'
console.log(Boolean(option))
console.log(typeof (Boolean(option)))

//coerção de tipos
console.log('10' + 5) //ira retornar 105 pq concatena a string 10 e o num 5