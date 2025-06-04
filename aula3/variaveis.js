//declarar variavel sem valor
var user
console.log(user)

//declarar variavel com valor e depois reatribuir o valor
var email = 'jhondoe@email.com'
console.log(email)

email = 'jhondoenew@email.com'
console.log(email)

//js é case sensitive, ou seja diferencia caracteres maiúsculos de minúsculos
var produto = 'arroz'
var Produto = 'feijao'
console.log(Produto)


//let só podemos declarar uma vez em cada escopo, se declarar de novo dará erro!
let usuario

//podemos declarar variáveis e atribuir numeros, elas serão do tipo Number
let number = 42
number = 30
console.log(number)

//podemos declarar variáveis usando o const, assim elas se tornam constantes
const constNumber = 50
console.log(constNumber)

//o hoisting iça a declaração da variavel sempre
console.log(users)
var users = 'User'

//nesse exemplo podemos ver que o var é acessado em qualquer lugar porem o let age só é acessado no escopo de bloco
var email = 'jhondoe@email.com'
{
  //escopo de bloco acessa variaveis globais
  console.log(email)
}
{
  //let age = 30
  var age = 30
}
console.log(age) // dará erro pois age não existe no global

//boas práticas de nomeação de variáveis
let lastname //pode mas é uma péssima prática
let lastName //camelCase
let ação //pode mas é uma péssima prática
let last_name //snake_case

let $email = 'jhondoe'
let _email = 'jhondoe'

//não pode
//let 1user = 'Jhon Doe'

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

//Expressoes e operadores aritiméticos
console.log('Soma:', 12 + 8)
console.log('Concatenação:', '12' + '8')
console.log('Subtração:', 12 - 8)
console.log('Multiplicação:', 12 * 8)
console.log('Multiplicação decimal:', 12 * 8.533)
console.log('Divisão:', 12 / 2)
console.log('Resto:', 13 % 2)
console.log('Exponencial:', 2 ** 2)


//incrementador
var numberToIncrement = 0
numberToIncrement++ // mesma coisa de dizer numberToIncrement = numberToIncrement + 1 
console.log(numberToIncrement++) //1
console.log(numberToIncrement) //2
console.log(++numberToIncrement) //3
console.log(numberToIncrement += 10) //numbertoincrement = numbertoincrement + 10

//decrementador
numberToIncrement--
console.log(numberToIncrement) //2
console.log(numberToIncrement--) //2
console.log(numberToIncrement) //1
console.log(--numberToIncrement) //0
console.log(numberToIncrement -= 10) //numbertoincrement = numbertoincrement - 10

//comentarios de documentação (sitaxe de JSdoc)
//o JSdoc é um padrão de documentação no código-fonte a partir de comentarios
/**
 *
 * retorna a soma
 * @param {Number} a primeiro numero.
 * @param {Number} b segundo numero.
 * @returns {Number} retorna a soma.
 */
function soma(a, b) {
  return a + b
}

//console.log(soma(3, 4))
//console.log(soma(30, 42))


function greetings(name, lastname) {
  return 'Oá ' + name + ' ' + lastname
}

//console.log(greetings('Guilherme', 'Oliveira'))

function newMessage() {
  console.log('Hello World')
}
//newMessage()

joinText('hello') //vai funcionar por causa do hosting
function joinText(text1, text2 = '') { //text2 é um parametro opcional!!
  console.log(text1, text2)
  newMessage() //criando função dentro de funçao

  function newMessage() {
    console.log('Hello World')
  }
}

//Arrow Function
const showMessage = (username) => {
  console.log(username)
}

showMessage('daniel')
