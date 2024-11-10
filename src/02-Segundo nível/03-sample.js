const VALOR_DO_FRETE_POR_KM = 10;

function calcularValorDoFrete(distanciaKm) {
    // Verifica se a distância é um número válido
    if (typeof distanciaKm !== 'number' || isNaN(distanciaKm) || distanciaKm < 0) {
        throw new Error('A distância fornecida deve ser um número válido e maior ou igual a 0.');
    }
    
    // Calcula o valor do frete
    return distanciaKm * VALOR_DO_FRETE_POR_KM;
}

try {
    // Distância em quilômetros
    const distanciaKm = 50;
    
   
    const frete = calcularValorDoFrete(distanciaKm);
    

    console.log(`O valor do frete é: R$${frete.toFixed(2)}`);
} catch (erro) {
    
    console.error(erro.message);
}
