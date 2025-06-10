import { Usuario } from "./encapsAbs.js"

const newUser = new Usuario('zé', 'ze@example.com', '123456')

console.log(newUser.nome)
newUser.nome = 'Max'
newUser.nome = 'Seu José'
console.log(newUser.nome)

console.log(newUser.email)
newUser.email = 'emailmeu.com'
newUser.email = 'email@example.com'
console.log(newUser.email)
console.clear()

console.log(newUser.validarSenha('123456'))
newUser.senha = 'abc'
newUser.senha = 'abcdef'
console.log(newUser.validarSenha('abcdef'))


