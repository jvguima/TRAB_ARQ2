async function buscarPersonagemENave(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        
        if (!respostaPersonagem.ok) {
            throw new Error(`Erro na resposta da API para o personagem: ${respostaPersonagem.status} ${respostaPersonagem.statusText}`);
        }

        const personagem = await respostaPersonagem.json();

        if (personagem.starships && personagem.starships.length > 0) {
            const respostaNave = await fetch(personagem.starships[0]);

            if (!respostaNave.ok) {
                throw new Error(`Erro na resposta da API para a nave: ${respostaNave.status} ${respostaNave.statusText}`);
            }

            const nave = await respostaNave.json();
            const tripulacao = parseInt(nave.crew.replace(/,/g, ''));

            if (!isNaN(tripulacao)) {
                if (tripulacao > 100) {
                    console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
                } else {
                    console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
                }
            } else {
                console.log(`A tripulação da nave ${nave.name} é desconhecida ou não numérica.`);
            }
        } else {
            console.log(`${personagem.name} não possui naves registradas.`);
        }

    } catch (erro) {
        console.error("Erro ao buscar o personagem ou sua nave:", erro);
    }
}

buscarPersonagemENave(1);
