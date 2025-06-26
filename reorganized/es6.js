/*
Ex. 1 – Arrow Function + Template Literal
Transforme a função abaixo em uma arrow function com template string:

*/
const apresentar = (nome) => `Olá, ${nome}!`
console.log(apresentar('João'))

/*
Ex. 2 – Desestruturação

extraia nome e preco.
*/
const produto = {
  nome: "Mouse",
  preco: 50,
  categoria: "Informática"
};

const { nome, preco } = produto
console.log(nome, preco)

/*
Ex. 3 – Spread Operator
Clone o array abaixo e adicione os números 4 e 5 no final:
*/
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5]
console.log(novosNumeros)

/*
Dado o seguinte objeto:
};
Crie uma função chamada resumoLivro que recebe um objeto como parâmetro, usa desestruturação para extrair os valores, e retorna uma frase no seguinte formato:
"Dom Casmurro foi escrito por Machado de Assis em 1899."
*/
const livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  ano: 1899
}
const resumoLivro = (obj) => {
  const { titulo, autor, ano } = obj
  console.log(`${titulo} foi escrito por ${autor} em ${ano}`)
}

resumoLivro(livro)

/*
Crie uma função chamada adicionarItem que:
Recebe dois parâmetros:
Um array de itens (ex: ["arroz", "feijão"])
Um novo item (ex: "macarrão") com valor padrão "produto genérico"
Retorna um novo array com todos os itens anteriores e o novo item (utilize o operador ...).
Exemplo de uso: 
const lista = adicionarItem(["leite", "café"], "açúcar");
Resultado esperado: ["leite", "café", "açúcar"]

const outraLista = adicionarItem(["água"]);
Resultado esperado: ["água", "produto genérico"]
*/

const adicionarItem = (itens, novoItem = "macarrão") => {
  return [...itens, novoItem]
}

const lista = adicionarItem(["leite", "café"], "açúcar");
console.log(lista)

const outraLista = adicionarItem(["água"]);
console.log(outraLista)

//Crie uma função que recebe um array de nomes de usuários e retorna uma nova lista com todos os nomes em maiúsculo usando map.

const nomes = ['Lucas', 'Andre']
