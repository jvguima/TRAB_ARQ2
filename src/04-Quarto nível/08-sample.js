// Constante de configuração
const ID_PLANETA_INICIAL = 1;  // ID do planeta inicial (por exemplo, Tatooine)

// Função principal para buscar o planeta por ID
async function buscarPlanetaPorId(id) {
    const url = `https://swapi.dev/api/planets/${id}/`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Planeta não encontrado ou não existe.");
        }

        const planeta = await resposta.json();
        exibirNomePlaneta(planeta.name);  // Exibe o nome do planeta

        // Condicional para continuar a recursão ou parar
        if (planeta.next) {
            const proximoId = id + 1;
            buscarPlanetaPorId(proximoId); // Chama recursivamente se houver mais planetas
        }

    } catch (erro) {
        exibirMensagemErro(erro.message);  // Exibe o erro, caso ocorra
    }
}

// Função para exibir o nome do planeta
function exibirNomePlaneta(nome) {
    console.log(nome);  // Exibe o nome do planeta no console
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML += `<div class="alert alert-info" role="alert">Nome do Planeta: ${nome}</div>`;
}

// Função para exibir mensagens de erro
function exibirMensagemErro(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-danger" role="alert">${mensagem}</div>`;
}

// Chama a função para buscar o planeta com o ID inicial
buscarPlanetaPorId(ID_PLANETA_INICIAL);
