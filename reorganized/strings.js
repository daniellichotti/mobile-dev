let nome = 'Leonardo'

//length retorna o tamanho da string
console.log(nome.length)

//toUpperCase() transforma os caracteres em maiúscula
console.log(nome.toUpperCase())

//toLowerCase() transforma os caracteres em minúscula
console.log(nome.toLowerCase())

//trim() remove espaços em branco no inicio e no fim da string
console.log(nome.trim())
console.log(nome.trimStart())
console.log(nome.trimEnd())

//includes() verifica se a string tem uma palavra incluida
let phrase = 'Estou aprendendo Python'
if (phrase.includes('Javascript')) {
  console.log('Parabéns! Javascript é muito legal!')
} else if (phrase.includes('Python')) {
  console.log('Parabéns! Python é muito legal!')
}

//replace() troca uma palavra pela outra
console.log(phrase.replace('Python', 'Javascript'))

//slice(inicio, fim) recorta a string
console.log(nome.slice(0, 3))

//split() divide em uma lista
let fruitPhrase = 'maçã, banana, laranja'
console.log(fruitPhrase.split(', '))

//charAt(posição) - pegar um caractere em uma posição
console.log(nome.charAt(3))

//Exercícios Práticos
let cidade = "  Rio de JaNeiRo     "
console.log(cidade.trim().toUpperCase())

phrase = 'Hoje é um bom dia!'
phrase.includes('bom') ? console.log(phrase.replace('bom', 'ótimo')) : console.log()

//
//Mostre no console o total de caracteres dessa string (incluindo espaços) depois o total sem os espaços
let mensagem = "Bem-vindo ao mundo da programação!";

console.log(mensagem.length)

while (mensagem.includes(' ')) {
  mensagem = mensagem.replace(' ', '')
}
console.log(mensagem.length)

/*
Crie uma função chamada contarPalavra que receba duas strings:
Um texto grande
Uma palavra alvo
A função deve contar quantas vezes a palavra alvo aparece no texto, sem diferenciar maiúsculas e minúsculas.
*/

let texto = "JavaScript é divertido. Aprender JavaScript é muito bom. Amo JavaScript!";

function contarPalavra(texto, palavra) {
  texto = texto.toLowerCase()
  palavra = palavra.toLowerCase()

  const parts = texto.split(palavra)
  console.log(parts)
  return parts.length - 1
}

console.log(contarPalavra(texto, "javAscript")); // Saída esperada: 3

console.clear()
/*
Crie uma função chamada capitalizarFrase que receba uma string como parâmetro e retorne a mesma frase com a primeira letra de cada palavra em maiúscula e o restante em minúscula.
Saída esperada: "Olá Mundo, Estou Aprendendo Javascript"
.join()
*/

function capitalizarFrase(frase) {
  let phraseList = frase.split(' ')

  //let phraseCap = phraseList.map(word => {
  //return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  //})
  for (let i = 0; i < phraseList.length; i++) {
    phraseList[i] = phraseList[i].charAt(0).toUpperCase() + phraseList[i].slice(1).toLowerCase()
  }

  //return phraseCap.join(' ')
  return phraseList.join(' ')
}

console.log(capitalizarFrase("olá mundo, estou aprendendo JAVASCRIPT"));


//outro exemplo
let comida = ['arroz', 'feijao', 'carne']
let carros = ['bmw', 'gol', 'jipe']
let alunos = ['caio', 'moises', 'guilherme']

function transformaMaiuscula(lista) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = lista[i].slice(0, 1).toUpperCase() + lista[i].slice(1).toLowerCase()
  }

  return lista.join(', ')
}
console.log(transformaMaiuscula(comida))