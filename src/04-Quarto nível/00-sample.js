// Constantes de Configuração
const MIN_ID_VALIDO = 1; // ID mínimo válido para o personagem

// Função principal de busca do personagem
async function buscarPersonagem() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = ""; // Limpa mensagens anteriores

    const personagemId = obterIdPersonagem();

    if (!personagemId) {
        exibirMensagemErro("ID inválido. Insira um número positivo.");
        return;
    }

    try {
        const personagem = await buscarPersonagemPorId(personagemId);
        exibirMensagemSucesso(personagem);
    } catch (erro) {
        exibirMensagemErro(erro.message);
    }
}

// Função para obter o ID do personagem a partir do input
function obterIdPersonagem() {
    const id = document.getElementById("personagemId").value;
    return (id && id >= MIN_ID_VALIDO) ? parseInt(id, 10) : null; // Verifica se o ID é válido
}

// Função para buscar o personagem na API
async function buscarPersonagemPorId(id) {
    const url = `https://swapi.dev/api/people/${id}/`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
    }

    return await resposta.json();
}

// Função para exibir a mensagem de erro
function exibirMensagemErro(mensagem) {
    exibirMensagem(mensagem, "danger");
}

// Função para exibir a mensagem de sucesso
function exibirMensagemSucesso(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${personagem.name}<br>
        <strong>Altura:</strong> ${personagem.height} cm<br>
        <strong>Peso:</strong> ${personagem.mass} kg
      </div>`;
}

// Função genérica para exibir mensagens com tipos diferentes (erro, sucesso)
function exibirMensagem(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}
