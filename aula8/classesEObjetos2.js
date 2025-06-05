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