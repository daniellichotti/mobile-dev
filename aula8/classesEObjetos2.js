class User {
  constructor(name, email, birthDate) {
    this.name = name
    this.email = email
    this.birthDate = birthDate
  }

  sendEmail() {
    console.log('email enviado de', this.name, 'com a data de nascimento', this.birthDate, 'do endereço', this.email)
    console.log('email enviado de ' + this.name + ' com a data de nascimento ' + this.birthDate + ' do endereço ' + this.email)
    console.log(`email enviado de ${this.name} com a data de nascimento ${this.birthDate} do endereço ${this.email}`)
  }
}

const newUser = new User('Caio', 'caio@yahoo.com', '07/11/2002')

console.log(newUser.name, newUser.birthDate, newUser.email)
newUser.sendEmail()

//Método estático
class UserStatic {
  constructor(message) {
    this.message = message
  }

  static showMessage(message) {
    console.log(message)
  }
}

UserStatic.showMessage('ola mundo')

//Herança
class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoise() {
    console.log('Algum barulho de animal')
  }
}

const newAnimal = new Animal('Dog')
console.log(newAnimal.name)
newAnimal.makeNoise()
console.clear()

class Dog extends Animal {
  constructor(dogName, race, color) {
    super(dogName)
    this.race = race
    this.color = color
  }

  makeNoise() {
    console.log('Au Au Au')
  }
}

const newDog = new Dog('Cachorro', 'Pastor Alemão', 'Preto')
console.log('O animal é um', newDog.name, 'da raça', newDog.race, 'da cor', newDog.color)
newDog.makeNoise()

class Cat extends Animal {
  constructor(race, color) {
    super('Gato')
    this.race = race
    this.color = color
  }

  makeNoise() {
    console.log('Miau Miau Miau')
  }
}

const newCat = new Cat('Siamês', 'Amarelo')
console.log('O animal é um', newCat.name, 'da raça', newCat.race, 'da cor', newCat.color)
newCat.makeNoise()

