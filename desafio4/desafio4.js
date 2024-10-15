const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular o percentual de cada estado
function calcularPercentualFaturamento(faturamento) {
    // Calcular o faturamento total
    const faturamentoTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

    // Calcular o percentual de cada estado
    const percentuais = Object.entries(faturamento).map(([estado, valor]) => ({
        estado,
        percentual: ((valor / faturamentoTotal) * 100).toFixed(2)
    }));

    return percentuais;
}

// Chamar a função e exibir os resultados
const resultados = calcularPercentualFaturamento(faturamentoPorEstado);
console.log(resultados);

