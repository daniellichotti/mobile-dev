//Url da API
const apiUrl = 'https://pokeapi.co/api/v2/pokemon'
const offset = 0

function getPokemons() {
  //Fazendo uma requisição GET na API
  fetch(`${apiUrl}?offset=${offset}&limit=20`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      //console.log(data['results'][0]['name'])
      for (let i = 0; i < data['results'].length; i++) {
        console.log(data['results'][i]['name'])
      }
    })
    .catch(error => {
      console.log('Erro ao buscar dados: ', error)
    })
}

getPokemons()