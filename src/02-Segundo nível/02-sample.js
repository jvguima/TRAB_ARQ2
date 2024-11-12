const IDADE_MINIMA_PARA_DIRIGIR = 18;

function podeDirigir(idade) {
    // Verifica se a idade é um número válido
    if (typeof idade !== "number" || isNaN(idade)) {
        throw new Error("A idade fornecida deve ser um número válido.");
    }
    
    // Verifica se a pessoa pode dirigir
    if (idade >= IDADE_MINIMA_PARA_DIRIGIR) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}
var idadeDoUSUARIO = 16;
try {
   
    console.log(podeDirigir(idadeDoUSUARIO)); 
} catch (erro) {
    
    console.error(erro.message);
}

