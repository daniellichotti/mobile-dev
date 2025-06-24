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
