// Constantes de configuração
const ID_ESPECIE_HUMANO = 1;  // ID da espécie Humano (exemplo)

// Função principal para buscar a espécie por ID
async function buscarEspeciePorId(id) {
    const url = `https://swapi.dev/api/species/${id}/`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Espécie não encontrada.");
        }

        const dadosEspecie = await resposta.json();
        exibirEsperanzaEspecie(dadosEspecie.average_lifespan);  // Exibe a expectativa de vida
    } catch (erro) {
        exibirMensagemErro(erro.message);  // Exibe o erro, caso ocorra
    }
}

// Função para exibir a expectativa de vida da espécie
function exibirEsperanzaEspecie(lifespan) {
    if (lifespan) {
        console.log(lifespan); // Exibe a expectativa de vida no console
        const mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.innerHTML = `<div class="alert alert-success" role="alert">Expectativa de Vida: ${lifespan}</div>`;
    } else {
        exibirMensagemErro("A espécie não tem uma expectativa de vida definida.");
    }
}

// Função para exibir mensagens de erro
function exibirMensagemErro(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-danger" role="alert">${mensagem}</div>`;
}

// Chama a função para buscar a espécie
buscarEspeciePorId(ID_ESPECIE_HUMANO);

