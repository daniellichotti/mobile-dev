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