export class Usuario {
  // Campos privados
  #nome;
  #email;
  #senha;

  constructor(nome, email, senha) {
    this.#nome = nome;
    this.#email = email;
    this.#senha = senha;
  }

  // Getter para o nome
  get nome() {
    return this.#nome;
  }

  // Setter para o nome
  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("Nome deve ter pelo menos 3 letras.");
    } else {
      this.#nome = novoNome;
    }
  }

  // Getter para o email
  get email() {
    return this.#email;
  }

  // Setter para o email
  set email(novoEmail) {
    if (!novoEmail.includes("@")) {
      console.log("Email inválido.");
    } else {
      this.#email = novoEmail;
    }
  }

  // Método público para validar senha
  validarSenha(senhaDigitada) {
    return this.#senha === senhaDigitada;
  }

  // Setter para alterar a senha com verificação
  set senha(novaSenha) {
    if (novaSenha.length < 4) {
      console.log("Senha muito curta.");
    } else {
      this.#senha = novaSenha;
    }
  }

  // Não há getter para a senha — protegida (encapsulamento real)
}

