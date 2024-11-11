async function buscarEDetalharNave() {
    try {
        const resposta = await fetch("https://swapi.dev/api/starships/9/");
        
        if (!resposta.ok) {
            throw new Error(`Erro na resposta da API: ${resposta.status} ${resposta.statusText}`);
        }

        const nave = await resposta.json();

        const detalhesNave = `
Nome: ${nave.name}
Modelo: ${nave.model}
Fabricante: ${nave.manufacturer}
        `.trim();

        console.log("Detalhes da Nave:");
        console.log(detalhesNave);

        const crewStr = nave.crew.replace(/,/g, '');
        const tamanhoTripulacao = parseInt(crewStr);

        if (!isNaN(tamanhoTripulacao)) {
            if (tamanhoTripulacao > 100) {
                console.log("Esta é uma nave grande.");
            } else {
                console.log("Esta é uma nave pequena.");
            }
        } else {
            console.log("O tamanho da tripulação é desconhecido ou não numérico.");
        }

    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro);
    }
}

buscarEDetalharNave();
