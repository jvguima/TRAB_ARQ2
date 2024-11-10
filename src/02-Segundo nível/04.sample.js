function tentarLogin(senha) {
    const senhaCorreta = "12345";
    const maxTentativas = 3;
    
    // Loop para permitir até 3 tentativas
    for (let tentativas = 1; tentativas <= maxTentativas; tentativas++) {
        if (senha === senhaCorreta) {
            return "Login efetuado com sucesso!";
        }

        // Se não for a senha correta, avisa quantas tentativas faltam
        if (tentativas < maxTentativas) {
            console.log(`Tentativa ${tentativas} falhou. Tente novamente.`);
        }
    }

    return "Tentativas de login excedidas.";
}

console.log(tentarLogin("123"));
