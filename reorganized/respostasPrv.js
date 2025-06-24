/*
Gerenciador de Tarefas

*/

//Cada tarefa é um objeto com propriedades como descrição, prioridade e status.
//Um array armazena várias tarefas.
let taskList = [
  { description: 'Comprar pão', priority: 'high', status: 'completed' },
  { description: 'Comprar arroz', priority: 'high', status: 'pending' },
  { description: 'Ir para a academia', priority: 'normal', status: 'pending' },
  { description: 'Fazer bolo', priority: 'low', status: 'completed' },
]

//Funções para adicionar, remover tarefas.
function addTask(list, task) {
  list.push(task)
  console.log('Tarefa adicionada com sucesso!')
}
//console.log(taskList)
//addTask(taskList, { description: 'Fazer biscoito', priority: 'low', status: 'pending' })
//console.log(taskList)

function rmTask(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].status === 'completed') {
      list[i] = ''
    }
  }
  let newList = list.filter(task => task != '')
  return newList
}
//taskList = rmTask(taskList)
//console.log(taskList)

//Loops para listar tarefas e condicionais para filtrar por status ou prioridade.
for (let i = 0; i < taskList.length; i++) {
  //console.log(taskList[i])
}

for (let i = 0; i < taskList.length; i++) {
  if (taskList[i].priority === 'high') {
    //console.log(taskList[i])
  }
}

/*
Simulador de Carrinho de Compras
*/

//Produtos são objetos simples com nome, preço e quantidade.
//O carrinho é um array de produtos.
let littleCar = [
  { name: 'Keyboard', price: '10.00', quantity: '2' },
  { name: 'Mouse', price: '5.00', quantity: '4' },
  { name: 'Headset', price: '12.00', quantity: '1' },
]

//Funções para adicionar, remover, listar produtos e calcular o total.
function addProduct(list, product) {
  list.push(product)
  console.log('Produto adicionado com sucesso!')
}
//console.log(littleCar)
//addProduct(littleCar, { name: 'Motherboard', price: '50.00', quantity: '1' })
//console.log(littleCar)

function rmTask(list, index) {
  list[index] = ''
  let newList = list.filter(product => product != '')
  return newList
}
littleCar = rmTask(littleCar, 0)
//console.log(littleCar)

function listProducts(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
  }
}
//listProducts(littleCar)

function littleCarTotal(list) {
  let total = 0
  for (let i = 0; i < list.length; i++) {
    total += (Number(list[i].price) * Number(list[i].quantity))
  }
  return total
}

//console.log(littleCar)

//Loops para mostrar itens e condicionais para aplicar descontos ou frete grátis.


if (littleCarTotal(littleCar) > 20) {
  //console.log('Frete Gratis e desconto de 10%')
  //console.log('O desconto é de: ', littleCarTotal(littleCar) * 0.1)
}

/*
Agenda de Contatos
*/

//Crie uma classe Contato com nome, telefone e email.
class Contact {
  constructor(name, phone, email) {
    this.name = name
    this.phone = phone
    this.email = email
  }
}
let contactList = []

//Crie os objetos contatos a partir da classe
//Armazene os contatos em um array.
contactList.push(new Contact('Souza', '22299282980', 'souza@gmail.com'))
contactList.push(new Contact('Caio', '221231212112', 'caio@gmail.com'))
contactList.push(new Contact('Lucas', '221235125', 'lucas@gmail.com'))


//Implemente funções para adicionar, buscar (por nome ou telefone), editar e remover contatos.
function addContact(list, name, phone, email) {
  list.push(new Contact(name, phone, email))
}
addContact(contactList, 'Leo', '21928383298', 'leo@gmail.com')

function getContact(list, name) {
  console.log(list.filter(contact => contact.name === name))
}
getContact(contactList, 'Souza')

function updateContact(list, index, name, phone, email) {
  list[index] = new Contact(name, phone, email)
}
updateContact(contactList, 0, 'Souza', '0', 'n/a')

function rmContact(list, index) {
  list[index] = ''
  let newList = list.filter(contact => contact != '')
  return newList
}
contactList = rmContact(contactList, 0)

getContact(contactList, 'Souza')

//Use loops para listar contatos e condicionais para validar dados ou encontrar contatos específicos.
for (let i = 0; i < contactList.length; i++) {
  //console.log(contactList[i])
  if (contactList[i].phone.startsWith('22')) {
    //console.log(contactList[i])
  }
  if (contactList[i].phone.length !== 11) {
    console.log('O ', contactList[i].name, 'tem o numero invalido')
  }
}
