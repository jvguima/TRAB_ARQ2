async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);

        if (!resposta.ok) {
            throw new Error(`Erro na resposta da API: ${resposta.status} ${resposta.statusText}`);
        }

        const planeta = await resposta.json();

        const detalhesPlaneta = `
Nome: ${planeta.name}
Clima: ${planeta.climate}
População: ${planeta.population}
        `.trim();

        console.log("Detalhes do Planeta:");
        console.log(detalhesPlaneta);

        const populacao = parseInt(planeta.population.replace(/,/g, ""));
        
        if (!isNaN(populacao)) {
            if (populacao > 1000000) {
                console.log("Este planeta é muito populado.");
            } else {
                console.log("Este planeta tem uma população pequena.");
            }
        } else {
            console.log("A população é desconhecida ou não numérica.");
        }
        
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro);
    }
}

buscarEDetalharPlaneta(1);
