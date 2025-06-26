//Url da API
const apiUrl = 'http://localhost:3000/users'
let date = new Date()

function getUsers() {
  //Fazendo uma requisição GET na API
  fetch(apiUrl)
    .then(response => {
      return response.json()
    })
    .then(data => {
      for (const obj of data) {
        console.log(`O ${obj.name} faz aniversário em ${obj.birthday}, logo ele tem ${Number(date.getFullYear()) - Number(obj.birthday.slice(6))} anos.`)
      }
    })
    .catch(error => {
      console.log('Erro ao buscar dados: ', error)
    })
}

function createUser(name, birthday) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      birthday: birthday,
    })
  })
    .then(resposta => resposta.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro ', error))
}

function updateUser(newName, newBirthday, id) {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newName,
      birthday: newBirthday,
    })
  })
    .then(resposta => resposta.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro ', error))
}

function deleteUser(id) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(resposta => {
      if (resposta.ok) {
        console.log('Usuario excluido com sucesso')
      } else {
        console.log('Falha ao excluir o usuário')
      }
    })
    .catch(error => console.error('Erro ', error))
}
createUser('Leo', '22/12/1990')
//updateUser('Glauco', '22/12/1920', 'c959')
//deleteUser('c959')
getUsers()