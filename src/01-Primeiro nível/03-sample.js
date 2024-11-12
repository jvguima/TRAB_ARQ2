// Constantes para conversão de tempo
const MILISSEGUNDOS_POR_SEGUNDO = 1000;
const SEGUNDOS_POR_MINUTO = 60;
const MINUTOS_POR_HORA = 60;
const HORAS_POR_DIA = 24;

// Constantes de datas
const dataInicio = "2024-01-01";
const dataFim = "2024-12-31";

function calcularDiferencaEmDias(dataInicio, dataFim) {
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    
    const diferencaEmMilissegundos = fim - inicio;
    const milissegundosPorDia = MILISSEGUNDOS_POR_SEGUNDO * SEGUNDOS_POR_MINUTO * MINUTOS_POR_HORA * HORAS_POR_DIA;

    return diferencaEmMilissegundos / milissegundosPorDia;
}

const resultado = calcularDiferencaEmDias(dataInicio, dataFim);
console.log(`A diferença em dias é: ${resultado}`);
