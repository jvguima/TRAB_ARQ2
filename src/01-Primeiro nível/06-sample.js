const nomeUsuario = "Pedro";
const idadeUsuario = 25;
const usuarioAtivo = true;

function descreverUsuario(nome, idade, ativo) {
    if (ativo) {
        console.log(`${nome} tem ${idade} anos e está ativo.`);
    } else {
        console.log(`${nome} está inativo.`);
    }
}

descreverUsuario(nomeUsuario, idadeUsuario, usuarioAtivo);
