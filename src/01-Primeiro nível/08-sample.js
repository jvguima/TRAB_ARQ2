// Constante para a idade mínima de maioridade
const IDADE_MINIMA_PARA_MAIORIDADE = 18;

const pessoa = { nome: "Maria", idade: 28 };

function verificarMaioridade(pessoa) {
    return pessoa.idade >= IDADE_MINIMA_PARA_MAIORIDADE;
}

console.log(verificarMaioridade(pessoa));
