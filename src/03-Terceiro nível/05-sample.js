async function buscarVeiculosECalcularCusto() {
    try {
        const resposta = await fetch("https://swapi.dev/api/vehicles/");
        
        if (!resposta.ok) {
            throw new Error(`Erro na resposta da API: ${resposta.status} ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        const veiculosCaros = dados.results.filter(veiculo => {
            const custo = parseInt(veiculo.cost_in_credits.replace(/,/g, ""));
            return !isNaN(custo) && custo > 10000;
        });

        console.log("Veículos caros (mais de 10.000 créditos):");
        veiculosCaros.forEach(veiculo => {
            console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
        });

        const custoTotal = veiculosCaros.reduce((total, veiculo) => {
            const custo = parseInt(veiculo.cost_in_credits.replace(/,/g, ""));
            return !isNaN(custo) ? total + custo : total;
        }, 0);

        console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);

    } catch (erro) {
        console.error("Erro ao buscar veículos:", erro);
    }
}

buscarVeiculosECalcularCusto();
