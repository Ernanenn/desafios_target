const numero = Number(document.getElementById('numero').value); // Obtém o valor digitado pelo usuário no elemento HTML com id 'numero' e converte para número.

function pertenceFibonacci(numero) {
    // Inicializa as duas primeiras variáveis da sequência de Fibonacci
    let a = 0, b = 1;

    // Enquanto 'a' for menor ou igual ao número informado, continua a verificação
    while (a <= numero) {
        // Se 'a' for igual ao número informado, significa que o número pertence à sequência
        if (a === numero) return true;

        // Calcula o próximo número da sequência e atualiza as variáveis 'a' e 'b'
        [a, b] = [b, a + b];
    }
    // Se o loop terminar sem encontrar o número, significa que ele não pertence à sequência
    return false;
};

function verificar() {
    // Obtém o número digitado pelo usuário (mesmo código da primeira linha)
    const numero = Number(document.getElementById('numero').value);

    // Verifica se o valor digitado é um número válido
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return; // Interrompe a função se o valor não for um número
    }

    // Chama a função 'pertenceFibonacci' e armazena o resultado em 'resultado'
    const resultado = pertenceFibonacci(numero) ? "Pertence à sequência" : "Não pertence à sequência";

    // Exibe o resultado na página, no elemento com id 'resultado'
    document.getElementById('resultado').textContent = resultado;
}

