export class Usuario {
  #nome
  #email
  #senha

  constructor(nome, email, senha) {
    this.#nome = nome
    this.#email = email
    this.#senha = senha
  }

  get nome() {
    return this.#nome
  }

  set nome(novoNome) {
    if (novoNome.length <= 3) {
      console.log('Nome deve ser maior que 3 letras')
    } else {
      this.#nome = novoNome
    }
  }

  get email() {
    return this.#email
  }

  set email(novoEmail) {
    if (!novoEmail.includes('@')) {
      console.log('Email invalido!')
    } else {
      this.#email = novoEmail
    }
  }

  validarSenha(senhaDigitada) {
    return this.#senha === senhaDigitada
  }

  set senha(novaSenha) {
    if (novaSenha.length < 4) {
      console.log('senha muito curta')
    } else {
      this.#senha = novaSenha
    }
  }
}

