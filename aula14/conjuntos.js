//Exemplos dos métodos do Set
const fruits = new Set()

//função para listar itens do set
function listSet(set) {
  for (const item of set) {
    console.log(item);
  }
}
//Adicionando elementos
fruits.add('Damasco')
fruits.add('Maça')
fruits.add('Tomate')
fruits.add('Damasco')
fruits.add('Laranja')
fruits.add('Mexerica')

//Verificando existência
console.log(fruits.has('Damasco'))
console.log(fruits.has('Limão'))

//Removendo elementos
fruits.delete('Tomate')
console.log(fruits)
listSet(fruits)

//Tamanho do Set
console.log(fruits.size)

//Limpando tudo
fruits.clear()
console.log(fruits)

//Exercício rápido
/*
Crie um Set chamado cidadesVisitadas e adicione as seguintes cidades:
"São Paulo"
"Rio de Janeiro"
"Belo Horizonte"
"São Paulo" (Repetida)
Depois:
Mostre no console o conteúdo do Set
Verifique se "Belo Horizonte" foi visitada
Remova "Rio de Janeiro"
Mostre o tamanho final do Set
 */

const cidadesVisitadas = new Set()

cidadesVisitadas.add("São Paulo")
cidadesVisitadas.add("Rio de Janeiro")
cidadesVisitadas.add("Belo Horizonte")
cidadesVisitadas.add("São Paulo")

console.log(cidadesVisitadas)
console.log(cidadesVisitadas.has('Belo Horizonte') ? 'Foi visitada' : 'Não foi visitada')
cidadesVisitadas.delete('Rio de Janeiro')
console.log(cidadesVisitadas.has('Rio de Janeiro') ? 'Foi visitada' : 'Não foi visitada')
console.log(`O set cidades visitadas tem ${cidadesVisitadas.size} cidades`)

/*
Cadastro de Nomes Únicos
Crie 5 nomes de pessoas e adicione todos os nomes em um Set, para garantir que os nomes sejam únicos.
Mostre no console quantos nomes únicos foram digitados e quais são eles.
*/

const namesArray = ['Leo', 'Souza', 'Souza', 'Souza', 'Lucas', 'Gabriel', 'Clebert', 'Clebert', 'Clebert', 'Souza', 'Souza', 'Lucas', 'Gabriel', 'Clebert', 'Clebert', 'Clebert']

const nameSet = new Set()
const namesArrayUnicos = []

for (const name of namesArray) {
  nameSet.add(name)
}

for (const name of nameSet) {
  namesArrayUnicos.push(name)
}

console.log(`Nesse set temos ${nameSet.size} nomes unicos que são: ${namesArrayUnicos.join(', ')}`)

/*
Controle de Produtos em Estoque
Imagine que você tem um sistema de controle de estoque.
Crie um Set chamado produtosEstoque.
Adicione os produtos: "Arroz", "Feijão", "Macarrão", "Arroz" (repetido de propósito).
Depois faça:
Verifique se "Feijão" está no estoque
Remova "Macarrão" do estoque
Exiba todos os produtos restantes no estoque no console 
*/

const produtosEstoque = new Set()

produtosEstoque.add('Arroz')
produtosEstoque.add('Feijão')
produtosEstoque.add('Macarrão')
produtosEstoque.add('Arroz')

console.log(produtosEstoque.has('Feijão') ? 'Tem Feijão no estoque' : 'Não tem feijão no estoque')

console.log(produtosEstoque.delete('Macarrão') ? 'Produto removido com sucesso' : 'Erro ao remover o produto')

console.log('Produtos em estoque: ')
for (const produto of produtosEstoque) {
  console.log(produto)
}
console.clear()

/*
Detectar Palavras Únicas em uma Frase
Dado a frase:
"banana maçã laranja banana uva maçã abacaxi"
Faça o JavaScript:
Separar as palavras da frase (usando split(" "))
Armazenar todas as palavras em um Set
Mostrar no console quantas palavras únicas existem e quais são elas
Exemplo de Saída esperada do desafio:
Total de palavras únicas: 5
Palavras: banana, maçã, laranja, uva, abacaxi
*/

let frase = "banana maçã laranja banana uva maçã abacaxi"
//separar frases com split

const palavrasUnicas = new Set(frase.split(' '))
console.log(palavrasUnicas)

//mostrando resultado
console.log(`Total de palavras únicas: ${palavrasUnicas.size}`)
console.log('Palavras únicas:')
for (const palavra of palavrasUnicas) {
  console.log(palavra)
}