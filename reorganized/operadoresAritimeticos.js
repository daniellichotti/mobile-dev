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