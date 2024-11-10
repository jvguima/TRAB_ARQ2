const sistemaAtivo = true;

function verificarAcesso(usuario) {
    if (!usuario || typeof usuario.ehAdmin !== 'boolean') {
        console.log("Erro: usuário inválido ou dados incorretos.");
        return;
    }

    if (sistemaAtivo && usuario.ehAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", ehAdmin: true };
verificarAcesso(usuario);
