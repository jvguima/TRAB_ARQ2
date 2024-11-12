// Constante para representar o desconto de 15%
const DESCONTO_PERCENTUAL = 0.15;


function calcularDesconto(precoOriginalDoProduto) {
    
    if (typeof precoOriginalDoProduto !== "number" || isNaN(precoOriginalDoProduto)) {
        throw new Error("O preço fornecido deve ser um número válido.");
    }
    
    // Calcula o preço com o desconto
    return precoOriginalDoProduto - (precoOriginalDoProduto * DESCONTO_PERCENTUAL);
}

try {
    // Preço original do produto
    const precoOriginalDoProduto = 100;
    
    // Calcula o preço final aplicando o desconto
    const precoFinal = calcularDesconto(precoOriginalDoProduto);
    
    // Exibe o preço final com o desconto aplicado, com duas casas decimais
    console.log(`Preço com desconto: R$${precoFinal.toFixed(2)}`);
} catch (erro) {
    
    console.error(erro.message);
}
