//exemplo simples
const pessoa = {
  nome: "Maria",
  idade: 30
}

console.log(Object.keys(pessoa)) // [ 'nome', 'idade' ]
console.log(Object.values(pessoa)) // [ 'Maria', 30 ]
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Maria' ], [ 'idade', 30 ] ]
console.log(pessoa.hasOwnProperty('nome')) // true

//Exemplo de Herança
const carro = new Object()

console.log(carro.toString()) //[object Object]
console.log(carro.hasOwnProperty('marca')) //false

//outro exemplo
const aluno = new Object()

aluno.nome = 'Lucas'
aluno.idade = 22

console.log(aluno)
for (let i = 0; i < Object.keys(aluno).length; i++) {
  console.log(`${Object.keys(aluno)[i]}: ${Object.values(aluno)[i]}`)
}

/**
Listando chaves de um objeto
Crie um objeto chamado livro com as seguintes propriedades:
título: "JavaScript para Iniciantes"
autor: "Maria Silva"
ano: 2022
Depois, use o método apropriado da classe Object para exibir no console todas as chaves desse objeto.
Saida
["título", "autor", "ano"]
*/

const livro = {
  título: "JavaScript para Iniciantes",
  autor: "Maria Silva",
  ano: 2022
}
console.clear()
const chaves = Object.keys(livro)
console.log(chaves)

/*
Contando propriedades
Crie um objeto chamado aluno com as seguintes propriedades:
nome: "Lucas"
idade: 25
curso: "Programação"
Depois, use um método da classe Object para contar quantas propriedades esse objeto tem.
Dica:
Use um método que retorne um array de chaves e depois use .length.
*/
const novoAluno = {
  nome: "Lucas",
  idade: 25,
  curso: "Programação"
}

console.log(Object.keys(novoAluno).length)

/*
Desafio
Crie um objeto chamado produto com as seguintes propriedades:
nome: "Notebook"
preco: 3500
emEstoque: true
categoria: "Eletrônicos"
Agora, usando os métodos da classe Object:
Crie um novo array contendo somente as chaves cujos valores são do tipo string.
Saida:
["nome", "categoria"]
Dica:
Você pode usar Object.entries() para trabalhar com pares chave-valor, junto com .filter().
*/
const produto = {
  nome: "Notebook",
  preco: 3500,
  emEstoque: true,
  categoria: "Eletrônicos"
}


/* 
const chavesComValorString = Object.entries(produto)
const chavesComValorString2 = []
for (const item of chavesComValorString) {
  if (typeof (item[1]) === 'string') {
    chavesComValorString2.push(item[0])
    }
    }
    console.log(chavesComValorString2)
    */

console.log(Object.entries(produto).filter(([chave, valor]) => typeof (valor) === 'string').map(([chave, valor]) => chave))