// Constantes para bônus de cargo e desconto
const BONUS_GERENTE = 1000;
const BONUS_SUPERVISOR = 500;
const BONUS_OUTROS_CARGOS = 200;
const DESCONTO_FIXO = 300;

// Constantes para faixas de imposto
const FAIXA_IMPOSTO_ALTO = 5000;
const FAIXA_IMPOSTO_MEDIO = 3000;

// Constantes para taxas de imposto
const IMPOSTO_ALTO = 0.27;
const IMPOSTO_MEDIO = 0.18;
const IMPOSTO_BAIXO = 0.11;

// Função para calcular o salário base
function calcularSalarioBase(horasTrabalhadas, valorHora) {
    if (typeof horasTrabalhadas !== "number" || typeof valorHora !== "number") {
        throw new Error("As horas trabalhadas e o valor da hora devem ser números.");
    }
    if (horasTrabalhadas < 0 || valorHora < 0) {
        throw new Error("As horas trabalhadas e o valor da hora devem ser maiores que zero.");
    }
    return horasTrabalhadas * valorHora;
}

// Função para calcular o bônus de acordo com o cargo
function calcularBonusCargo(cargo) {
    if (!cargo || typeof cargo !== "string") {
        throw new Error("O cargo deve ser uma string válida.");
    }

    switch (cargo.toLowerCase()) {
        case "gerente":
            return BONUS_GERENTE;
        case "supervisor":
            return BONUS_SUPERVISOR;
        default:
            return BONUS_OUTROS_CARGOS;
    }
}

// Função para aplicar o imposto de acordo com o salário
function aplicarImposto(salarioComDesconto) {
    if (salarioComDesconto > FAIXA_IMPOSTO_ALTO) {
        return salarioComDesconto - (salarioComDesconto * IMPOSTO_ALTO);
    } else if (salarioComDesconto > FAIXA_IMPOSTO_MEDIO) {
        return salarioComDesconto - (salarioComDesconto * IMPOSTO_MEDIO);
    } else {
        return salarioComDesconto - (salarioComDesconto * IMPOSTO_BAIXO);
    }
}

// Função principal para calcular o salário final
function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBruto = calcularSalarioBase(horasTrabalhadas, valorHora);
    const bonusCargo = calcularBonusCargo(cargo);

    const salarioComBonusCargo = salarioBruto + bonusCargo;
    const salarioComDesconto = salarioComBonusCargo - DESCONTO_FIXO;
    
    // Aplica o imposto sobre o salário com os descontos
    const salarioFinal = aplicarImposto(salarioComDesconto);
    
    return salarioFinal;
}
