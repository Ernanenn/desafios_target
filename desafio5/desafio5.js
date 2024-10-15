const minhaString = "Aqui, coloco a string a ser invertida!"; // Define a string que queremos inverter
const stringInvertida = inverterString(minhaString); // Chama a função para inverter a string e armazena o resultado

function inverterString(str) {
    // Cria uma string vazia para armazenar a string invertida
    let novaString = '';

    // Itera sobre a string original, do último caractere até o primeiro
    for (let i = str.length - 1; i >= 0; i--) {
        // Adiciona o caractere atual da string original ao final da nova string
        novaString += str[i];
    }

    // Retorna a string invertida
    return novaString;
}

console.log(stringInvertida); // Imprime a string invertida no console