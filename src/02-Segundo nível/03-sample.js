const VALOR_DO_FRETE_POR_KM = 10;

function calcularValorDoFrete(distanciaKm) {
    
    if (typeof distanciaKm !== "number" || isNaN(distanciaKm) || distanciaKm < 0) {
        throw new Error("A distância fornecida deve ser um número válido e maior ou igual a 0.");
    }
    
   
    return distanciaKm * VALOR_DO_FRETE_POR_KM;
}
var casasDecimais = 2;
try {
    
    const distanciaKm = 50;
    
   
    const frete = calcularValorDoFrete(distanciaKm);
    

    console.log(`O valor do frete é: R$${frete.toFixed(casasDecimais)}`);
} catch (erro) {
    
    console.error(erro.message);
}
