// Constantes de configuração
const ID_PERSONAGEM_INEXISTENTE = 1000000000000;  // ID improvável de existir

// Função principal para buscar o personagem por ID
async function buscarPersonagemPorId(id) {
    const url = `https://swapi.dev/api/people/${id}/`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado.");
        }

        const personagem = await resposta.json();
        exibirNomePersonagem(personagem.name);  // Exibe o nome do personagem
    } catch (erro) {
        exibirMensagemErro(erro.message);  // Exibe o erro, caso ocorra
    }
}

// Função para exibir o nome do personagem
function exibirNomePersonagem(nome) {
    console.log(nome); // Exibe no console
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-success" role="alert">Nome do Personagem: ${nome}</div>`;
}

// Função para exibir mensagens de erro
function exibirMensagemErro(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-danger" role="alert">${mensagem}</div>`;
}

// Chama a função para buscar o personagem
buscarPersonagemPorId(ID_PERSONAGEM_INEXISTENTE);
