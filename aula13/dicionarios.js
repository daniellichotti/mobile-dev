//Sugestão do souza
/*
let numbers = []

for (let i = 0; i < 10000; i++) {
  numbers.push(Math.random())
}

console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
 */
//exemplo prático
//usando arrays é muuuuuuito mais lento com grandes items
var palavras = ['casa', 'carro', 'livro', 'janela']

function contemPalavras(palavra) {
  return palavras.includes(palavra)
}

console.log(contemPalavras('livro'))

//usando obj é muuuuito mais rapido com grandes items
var palavras = {
  casa: true,
  carro: true,
  livro: true,
  janela: true,
}


function contemPalavrasObj(palavra) {
  return palavras[palavra] === true
}
console.log(contemPalavrasObj('livro'))

/*
Verificar Presença de Nome
Crie uma função chamada verificarNome que recebe um nome de usuário e verifica se ele está cadastrado em um objeto usuariosCadastrados.
Entrada: 'carlos'
Saída esperada: true
*/
const usuariosCadastrados = {
  ana: true,
  bruno: true,
  carlos: true
};

function verificarNome(userName) {
  return usuariosCadastrados[userName] === true
}
console.log(verificarNome('carlos'))

/*
Contagem de Ocorrências de Letras
Faça uma função chamada contarLetras que recebe uma string e retorna um objeto com a contagem de cada letra.
Saída esperada:
{ b: 1, a: 3, n: 2 }
*/
function contarLetras(texto) {
  const contagem = {}


  for (let i = 0; i < texto.length; i++) {
    if (contagem[texto[i]]) {
      contagem[texto[i]]++
    } else {
      contagem[texto[i]] = 1
    }
  }

  /*
  for (const letra of texto) {
    if (contagem[letra]) {
      contagem[letra]++
      } else {
        contagem[letra] = 1
    }
    */

  return contagem
}

console.log(contarLetras('banana'))

/*
Detectar Elementos Duplicados em um Array
Crie uma função chamada temDuplicados que recebe um array de números e retorna true se houver algum número repetido.
Saída esperada: true
*/
console.clear()

function temDuplicados(array) {
  const vistos = {}

  for (const elemento of array) {
    if (vistos[elemento]) {
      return true
    } else {
      vistos[elemento] = true
    }
  }

  return false
}


console.log(temDuplicados([1, 2, 3, 2, 5])) //True
console.log(temDuplicados([1, 2, 3, 7, 5])) //False