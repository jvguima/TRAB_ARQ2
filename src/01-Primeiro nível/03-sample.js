const dataInicio = "2024-01-01";
const dataFim = "2024-12-31";

function calcularDiferencaEmDias(dataInicio, dataFim) {
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    
    const diferencaEmMilissegundos = fim - inicio;
    const milissegundosPorDia = 1000 * 60 * 60 * 24;

    return diferencaEmMilissegundos / milissegundosPorDia;
}

const resultado = calcularDiferencaEmDias(dataInicio, dataFim);
console.log(`A diferença em dias é: ${resultado}`);
