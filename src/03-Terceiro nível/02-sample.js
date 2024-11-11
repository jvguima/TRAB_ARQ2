async function buscarEFiltrarPessoas() {
    try {
        const resposta = await fetch("https://swapi.dev/api/people/");
        
        if (!resposta.ok) {
            throw new Error(`Erro na resposta da API: ${resposta.status} ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        const pessoasComL = dados.results.filter(pessoa => pessoa.name.startsWith("L"));

        console.log("Pessoas cujo nome começa com L:");
        pessoasComL.forEach(pessoa => {
            console.log(pessoa.name);
        });

        console.log(`Total de pessoas encontradas com nome começando com L: ${pessoasComL.length}`);

    } catch (erro) {
        console.error("Erro ao buscar pessoas:", erro);
    }
}

buscarEFiltrarPessoas();
