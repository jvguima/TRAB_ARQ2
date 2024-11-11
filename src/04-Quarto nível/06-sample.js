// Constantes de configuração
const ID_NAVE_X_WING = 10;  // ID de uma nave específica (exemplo)

async function buscarNavePorId(id) {
    const url = `https://swapi.dev/api/starships/${id}/`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Nave não encontrada.");
        }

        const naveDados = await resposta.json();
        exibirNomeNave(naveDados.name);  // Exibe o nome da nave
    } catch (erro) {
        exibirMensagemErro(erro.message);  // Exibe o erro, caso ocorra
    }
}

// Função para exibir o nome da nave
function exibirNomeNave(nome) {
    console.log(nome); // Exibe no console
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-success" role="alert">Nome da Nave: ${nome}</div>`;
}

// Função para exibir mensagens de erro
function exibirMensagemErro(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-danger" role="alert">${mensagem}</div>`;
}

// Chama a função para buscar a nave
buscarNavePorId(ID_NAVE_X_WING);
