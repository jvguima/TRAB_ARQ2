class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Definindo a idade do gestor de forma mais clara
const idadeGestor = 40;

// Criando o objeto Gestor
const gestor = new Gestor("Lucas", idadeGestor);

// Exibindo as informações no console
console.log(gestor);
