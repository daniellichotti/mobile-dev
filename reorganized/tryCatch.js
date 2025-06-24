//tipos de erros
//SyntaxError
//console.log("Ola mundo)
//ReferenceError
//let name = 'Lucas'
//console.log(nome)
//TypeError
//let x = null
//console.log(x.toUpperCase())

try {
  let usuario = null;
  console.log(usuario.nome); // ERRO: não posso acessar propriedade de null
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}

try {
  console.log("Executando...");
  //throw new Error("Erro forçado");
} catch (e) {
  console.log("Erro capturado");
} finally {
  console.log("Sempre executa");
}
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida!");
  }
  return a / b;
}

try {
  console.log(dividir(10, 0));
} catch (erro) {
  console.log("Erro:", erro.message);
}

/*
Verificador de Idade
Crie uma função chamada verificarIdade que recebe uma idade como parâmetro.
Se a idade for menor que 0, lança um erro dizendo "Idade inválida!".
Caso contrário, retorna "Idade válida".
*/
function verificarIdade(idade) {
  try {
    if (idade < 0) {
      throw new Error("Idade inválida");
    }
    return 'Idade válida'
  } catch (error) {
    return 'Erro: ' + error.message
  }
}

console.log(verificarIdade(-1))
console.log(verificarIdade(2))
/*
Cadastro de Usuário
Crie uma função cadastrarUsuario(usuario) que espera receber um objeto com as propriedades nome e email.
Se faltar alguma dessas propriedades, lance um erro com a mensagem: "Dados incompletos!".
Se estiver tudo certo, retorne "Usuário cadastrado com sucesso".
*/

function cadastrarUsuario(usuario) {
  try {
    if (!usuario.nome || !usuario.email) {
      throw new Error("Dados incompletos!");
    }
    return 'Usuário cadastrado com sucesso'
  } catch (error) {
    return 'Erro: ' + error
  }
}

console.clear()
console.log(cadastrarUsuario({ nome: 'Moisés', email: 'moises@email.com' }))
console.log(cadastrarUsuario({ email: 'moises@email.com' }))
console.log(cadastrarUsuario({ nome: 'Moisés' }))