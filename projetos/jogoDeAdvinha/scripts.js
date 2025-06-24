let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificar() {
    const input = document.getElementById("entradaNumero");
    const mensagem = document.getElementById("mensagem");
    const numero = Number(input.value);

    if (numero < 1 || numero > 100 || isNaN(numero)) {
        mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
        return;
    }

    tentativas++;
    document.getElementById("tentativas").textContent = tentativas;

    if (numero === numeroSecreto) {
        mensagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`;
    } else if (numero > numeroSecreto) {
        mensagem.textContent = "Erroou, o número secreto é menor.";
    } else {
        mensagem.textContent = "Erroou, o número secreto é maior.";
    }

    input.value = "";
    input.focus();
}

function reiniciar() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    document.getElementById("tentativas").textContent = tentativas;
    document.getElementById("mensagem").textContent = "";
    document.getElementById("entradaNumero").value = "";
    document.getElementById("entradaNumero").focus();
}