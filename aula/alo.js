import { Usuario } from "./encapsulamento.js";

// Uso da classe
const usuario = new Usuario("Ana", "ana@email.com", "1234");

console.log(usuario.nome);     // Ana
usuario.nome = "Al";           // Nome deve ter pelo menos 3 letras.
usuario.nome = "Alice";        // ok
console.log(usuario.nome);     // Alice

console.log(usuario.email);    // ana@email.com
usuario.email = "invalido";    // Email inválido
usuario.email = "alice@site.com"; // ok
console.log(usuario.email);    // alice@site.com

console.log(usuario.validarSenha("1234")); // true
usuario.senha = "abc";         // Senha muito curta.
usuario.senha = "novaSenha";   // ok

// console.log(usuario.#senha); // ❌ Erro: senha é privada
