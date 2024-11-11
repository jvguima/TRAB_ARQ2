// Constantes de configuração
const FILME_ID = 1; // ID do filme que será buscado

// Função principal para buscar o filme
async function buscarFilme() {
    try {
        const filmeData = await obterFilmePorId(FILME_ID);
        exibirTituloFilme(filmeData.title);
    } catch (erro) {
        exibirMensagemErro(erro.message);
    }
}

// Função para obter o filme por ID
async function obterFilmePorId(id) {
    const url = `https://swapi.dev/api/films/${id}/`;
    const respostaApi = await fetch(url);

    if (!respostaApi.ok) {
        throw new Error("Não foi possível encontrar o filme. Verifique o ID e tente novamente.");
    }

    return await respostaApi.json();
}

// Função para exibir o título do filme em maiúsculas
function exibirTituloFilme(titulo) {
    console.log(titulo.toUpperCase()); // Exibe o título no console em maiúsculas
    const mensagemDiv = document.getElementById("mensagem");

    // Criando a mensagem de forma mais legível
    const mensagem = `<div class="alert alert-success" role="alert">Título do Filme: ${titulo.toUpperCase()}</div>`;
    
    // Atribuindo a mensagem ao innerHTML
    mensagemDiv.innerHTML = mensagem;
}

// Função para exibir mensagem de erro
function exibirMensagemErro(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    const mensagemErro = `<div class="alert alert-danger" role="alert">${mensagem}</div>`;
    
    // Atribuindo a mensagem de erro ao innerHTML
    mensagemDiv.innerHTML = mensagemErro;
}

// Chama a função para buscar o filme
buscarFilme();
