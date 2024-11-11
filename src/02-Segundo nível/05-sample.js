// Constantes para bônus de cargo e desconto
const BONUS_GERENTE = 1000;  // Bônus para cargo de Gerente
const BONUS_SUPERVISOR = 500; // Bônus para cargo de Supervisor
const BONUS_OUTROS_CARGOS = 200; // Bônus para cargos diversos
const DESCONTO_MENSAL = 300; // Desconto fixo mensal (exemplo: plano de saúde, vale transporte, etc.)

// Constantes para faixas de imposto
const LIMITE_IMPOSTO_ALTO = 5000;  // Limite para imposto alto: salários acima de R$5000
const LIMITE_IMPOSTO_MEDIO = 3000; // Limite para imposto médio: salários entre R$3000 e R$5000

// Constantes para taxas de imposto
const ALIQUOTA_IMPOSTO_ALTO = 0.27;  // Imposto de 27% para salários acima de R$5000
const ALIQUOTA_IMPOSTO_MEDIO = 0.18; // Imposto de 18% para salários entre R$3000 e R$5000
const ALIQUOTA_IMPOSTO_BAIXO = 0.11; // Imposto de 11% para salários abaixo de R$3000

// Constantes para parâmetros de cálculo de salário
const HORAS_MES = 160; // Quantidade padrão de horas trabalhadas por mês (considerando 40h/semana)
const VALOR_HORA_PADRAO = 30; // Valor padrão por hora de trabalho
const CARGO_FUNCIONARIO = "gerente"; // Cargo do funcionário (exemplo: "gerente", "supervisor", etc.)

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
    if (salarioComDesconto > LIMITE_IMPOSTO_ALTO) {
        return salarioComDesconto - (salarioComDesconto * ALIQUOTA_IMPOSTO_ALTO);
    } else if (salarioComDesconto > LIMITE_IMPOSTO_MEDIO) {
        return salarioComDesconto - (salarioComDesconto * ALIQUOTA_IMPOSTO_MEDIO);
    } else {
        return salarioComDesconto - (salarioComDesconto * ALIQUOTA_IMPOSTO_BAIXO);
    }
}

// Função principal para calcular o salário final
function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBruto = calcularSalarioBase(horasTrabalhadas, valorHora);
    const bonusCargo = calcularBonusCargo(cargo);

    const salarioComBonusCargo = salarioBruto + bonusCargo;
    const salarioComDesconto = salarioComBonusCargo - DESCONTO_MENSAL;
    
    // Aplica o imposto sobre o salário com os descontos
    const salarioFinal = aplicarImposto(salarioComDesconto);
    
    return salarioFinal;
}
