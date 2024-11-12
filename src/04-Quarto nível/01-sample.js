// Constantes de configuração
const PLANETA_ID = 1; // ID do planeta que será buscado

// Função principal para buscar o planeta
async function buscarPlaneta() {
    try {
        const planeta = await obterPlanetaPorId(PLANETA_ID);
        exibirNomeDoPlaneta(planeta.name);
    } catch (erro) {
        exibirMensagemErro(erro.message);
    }
}

// Função para obter o planeta por ID
async function obterPlanetaPorId(id) {
    const url = `https://swapi.dev/api/planets/${id}/`;
    const respostaApi = await fetch(url);

    if (!respostaApi.ok) {
        throw new Error("Não foi possível encontrar o planeta. Verifique o ID e tente novamente.");
    }

    return await respostaApi.json();
}

// Função para exibir o nome do planeta
function exibirNomeDoPlaneta(nome) {
    console.log(nome); // Exibe no console
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-success" role="alert">Nome do Planeta: ${nome}</div>`;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-danger" role="alert">${mensagem}</div>`;
}

// Chama a função para buscar o planeta
buscarPlaneta();
