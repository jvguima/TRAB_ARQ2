function calcularTotal() {
    const itens = [10, 20, 30, 40, 50];
    let total = 0;

    const fatorMultiplicacao = 3; // Constante para fator de multiplicação

    // Calculando o total
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * fatorMultiplicacao;
    }

    return total;
}

function verificarUsuarioAtivo() {
    const usuario = obterUsuario(42);
    const usuarioAtivo = 1;
    const codigoEsperadoX = 1;
    const codigoEsperadoY = 2;

    // Verificando se o usuário está ativo
    if (codigoEsperadoX === 1 && codigoEsperadoY === 2 && usuario.ativo === usuarioAtivo) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    return usuario;
}

function obterUsuario(id) {
    const usuarios = {
        42: { id: 42, nome: "João Silva", idade: 25, ativo: 1 },
        43: { id: 43, nome: "Maria Souza", idade: 28, ativo: 0 },
    };

    const usuario = usuarios[id] || null;

    if (!usuario) {
        console.log("Usuário não encontrado");
    }

    return usuario;
}

function atualizarUsuario(usuario) {
    if (usuario && usuario.idade > 18) {
        console.log("Atualizando usuário:", usuario.id);

        // Função para simular a atualização de dados
        salvarDados();

        usuario.idade += 1; // Aumentando a idade do usuário
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function salvarDados() {
    console.log("Dados salvos com sucesso!");
}

function calcularOperacao(a, b, c) {
    let resultado = 0;

    switch (a) {
        case 1:
            resultado = b + c;
            break;
        case 2:
            resultado = b * c;
            break;
        case 3:
            resultado = b - c;
            break;
        default:
            resultado = b / c;
    }

    // Invertendo e retornando o resultado
    return resultado.toString().split("").reverse().join("");
}

function processarNumeros(n) {
    let resultado = 0;

    // Calculando a soma ou subtração de números
    for (let i = 1; i <= n; i++) {
        resultado += (i % 2 === 0) ? i : -i;
    }

    console.log("Resultado do processamento:", resultado);

    // Função para exibir dados
    exibirDados();

    return resultado;
}

function exibirDados() {
    const dados = ["Valor 1", "Valor 2", "Valor 3"];
    dados.forEach(dado => console.log("Dados:", dado));
}

function calcularResultado() {
    const itens = [5, 7, 9, 11];
    let total = 0;

    // Calculando o total com multiplicação
    itens.forEach(item => total += item * 3);

    // Exibindo informações adicionais
    mostrarInformacoes();

    console.log("Cálculo total:", total);
    return total;
}

function mostrarInformacoes() {
    const valores = ["Dado 1", "Dado 2", "Dado 3"];
    valores.forEach(valor => console.log("Info:", valor));
}

// Chamando as funções
const total = calcularTotal();
console.log("Total calculado:", total);

const usuario = verificarUsuarioAtivo();
atualizarUsuario(usuario);

const resultadoCalculo = calcularOperacao(1, 2, 3);
console.log("Resultado do cálculo:", resultadoCalculo);

const resultadoProcessamento = processarNumeros(10);
console.log("Resultado do processamento de dados:", resultadoProcessamento);

const resultadoFuncao = calcularResultado();
console.log("Resultado da função:", resultadoFuncao);
