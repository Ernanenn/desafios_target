let indice = 13; // Define o limite superior da soma (até 12 neste caso)
let soma = 0;    // Inicializa a variável soma com o valor 0

for (let k = 1; k < indice; k++) {  // Inicia um loop que irá iterar de 1 até indice-1
    soma += k;                      // Adiciona o valor atual de k à soma a cada iteração
}
console.log(soma);               // Imprime o valor final da soma no console
