/*
Você está desenvolvendo um pequeno sistema em JavaScript para controlar o estoque de uma loja.
Crie um código JavaScript que atenda aos seguintes requisitos:
*/
//O sistema deve ter um objeto (dicionário) chamado estoque, onde as chaves são os nomes dos produtos e os valores são as quantidades disponíveis.
const estoque = {
  'calça': 4,
  'camisa': 0,
  'meia': 2
}

//Peça ao usuário (simulado via variável no código) o nome de um produto que ele deseja comprar.
const produtoSelecionado = 'casaco'

//Antes de reduzir a quantidade no estoque, o programa deve verificar se o produto existe. Se não existir, deve lançar e tratar uma exceção informando: "Produto não encontrado no estoque."
//Se o produto existir, subtraia 1 unidade e exiba o estoque atualizado.
//Se a quantidade do produto já for 0, também deve lançar e tratar uma exceção com a mensagem: "Produto esgotado."


try {
  if (estoque[produtoSelecionado] === 0) {
    throw new Error("Produto esgotado.")
  }
  if (!(produtoSelecionado in estoque)) {
    throw new Error("Produto não encontrado no estoque.")
  }
  estoque[produtoSelecionado]--
  console.log('Compra realizada com sucesso.')
  console.log('Estoque atualizado:', estoque)
} catch (error) {
  console.error('Erro: ', error.message)
}

console.clear()

/*
Você deve criar um pequeno programa em JavaScript que consuma uma API pública de usuários e manipule os resultados da seguinte forma:


Para esses usuários, exiba o nome em letras maiúsculas
Extraia apenas o domínio de email (parte após o @)
Mostre o nome da cidade onde o usuário mora
Os resultados devem ser exibidos assim no console:
*/
//Faça uma requisição GET para a seguinte API pública: https://jsonplaceholder.typicode.com/users
//Implemente tratamento de exceções
//Se ocorrer qualquer erro durante a requisição (por exemplo, a API estiver offline), exiba:
//'Erro ao buscar dados da API: <mensagem do erro>'
//Após obter a resposta com sucesso, o programa deve:
//Exibir apenas os usuários cujo nome completo contém mais de 15 caracteres
//USUÁRIO: CLEMENTINE BAUCH
//DOMÍNIO DE EMAIL: ramiro.info
//CIDADE: McKenziehaven
function gerarRelatorioUsuarios() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na resposta', response.status)
      }
      return response.json()
    })
    .then(users => {
      users
        .filter(user => user.name.length > 15)
        .forEach(user => {
          const nomeMaiusculo = user.name.toUpperCase()
          const dominioEmail = user.email.split('@')[1]
          const cidade = user.address.city
          console.log('USUÁRIO:', nomeMaiusculo)
          console.log('DOMÍNIO DE EMAIL:', dominioEmail)
          console.log('CIDADE:', cidade)
          console.log('--------------------------')
        });
    })
    .catch(e => {
      console.log('Erro ao buscar dados da API:', e.message)
    })
}

//gerarRelatorioUsuarios()

/*
EXTRA
Você está criando um formulário de cadastro de usuários em JavaScript.  
Desenvolva um código que faça o seguinte:  

Monte um objeto chamado novoUsuario com as seguintes informações:
nome -> "Lucas Silva"
email  -> "lucas.silva@example.com"
Envie esse objeto para a seguinte API de teste usando o método HTTP POST:
https://jsonplaceholder.typicode.com/users
Envie os dados no formato JSON.
Após o envio, exiba a resposta da API no console.
*/

const novoUsuario = {
  nome: "Lucas Silva",
  email: "lucas.silva@example.com"
}

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(novoUsuario)
})
  .then(resposta => console.log(resposta.statusText))
  .catch(error => console.error('Erro ', error))