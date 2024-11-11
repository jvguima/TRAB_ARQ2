// Função principal para buscar os dados do personagem
async function buscarPersonagem() {
    try {
        const dadosPersonagem = obterDadosPersonagem();
        exibirNomePersonagem(dadosPersonagem);
    } catch (erro) {
        exibirMensagemErro(erro.message);
    }
}

// Função para obter os dados do personagem
function obterDadosPersonagem() {
    // Simulando um dado JSON, normalmente seria recuperado de uma API
    const dadosJson = '{"name": "Luke", "idade": 23}'; // JSON formatado corretamente
    try {
        const personagem = JSON.parse(dadosJson); // Parse do JSON
        return personagem;
    } catch (erro) {
        throw new Error("Falha ao processar os dados do personagem. Dados inválidos.");
    }
}

// Função para exibir o nome do personagem
function exibirNomePersonagem(personagem) {
    console.log(personagem.name); // Exibe o nome no console
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-success" role="alert">Nome do Personagem: ${personagem.name}</div>`;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-danger" role="alert">${mensagem}</div>`;
}

// Chama a função para buscar o personagem
buscarPersonagem();
