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