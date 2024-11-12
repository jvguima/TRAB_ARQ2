// Definir constantes para os anos e números mágicos
const DATA_2023 = 2023; // Ano de 2023
const DATA_2024 = 2024; // Ano de 2024
const DATA_2022 = 2022; // Ano de 2022
const DATA_2021 = 2021; // Ano de 2021
const DATA_2020 = 2020; // Ano de 2020

const DIA_FEVEREIRO = 15; // Dia 15
const DIA_1 = 1; // Dia 1
const DIA_5 = 5; // Dia 5
const DIA_10 = 10; // Dia 10
const DIA_22 = 22; // Dia 22
const DIA_25 = 25; // Dia 25
const DIA_31 = 31; // Dia 31

const MES_FEVEREIRO = 1; // Fevereiro
const MES_SETEMBRO = 8; // Setembro
const MES_MAIO = 4; // Maio
const MES_AGOSTO = 7; // Agosto
const MES_OUTUBRO = 10; // Outubro
const MES_MARCO = 2; // Março
const MES_DEZEMBRO = 11; // Dezembro

class Usuario {
    constructor({
        nome, idade, cargo, dataCriacao, dataUltimoLogin, ativo, tentativasLogin, numeroAcessos
    }) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.dataCriacao = dataCriacao;
        this.dataUltimoLogin = dataUltimoLogin;
        this.ativo = ativo;
        this.tentativasLogin = tentativasLogin;
        this.numeroAcessos = numeroAcessos;
    }
}

const usuarios = [
    new Usuario({
        nome: "Carlos",
        idade: 25,
        cargo: "admin",
        dataCriacao: new Date(DATA_2023, MES_FEVEREIRO, DIA_FEVEREIRO), // Fevereiro de 2023
        dataUltimoLogin: new Date(DATA_2024, MES_SETEMBRO, DIA_1), // Setembro de 2024
        ativo: true,
        tentativasLogin: 100,
        numeroAcessos: 2
    }),
    new Usuario({
        nome: "Ana",
        idade: 30,
        cargo: "guest",
        dataCriacao: new Date(DATA_2020, MES_MAIO, DIA_22), // Maio de 2020
        dataUltimoLogin: new Date(DATA_2024, MES_AGOSTO, DIA_31), // Agosto de 2024
        ativo: true,
        tentativasLogin: 50,
        numeroAcessos: 3
    }),
    new Usuario({
        nome: "José",
        idade: 29,
        cargo: "admin",
        dataCriacao: new Date(DATA_2022, MES_OUTUBRO, DIA_5), // Outubro de 2022
        dataUltimoLogin: new Date(DATA_2024, MES_AGOSTO, DIA_10), // Agosto de 2024
        ativo: false,
        tentativasLogin: 200,
        numeroAcessos: 5
    }),
    new Usuario({
        nome: "Maria",
        idade: 35,
        cargo: "guest",
        dataCriacao: new Date(DATA_2021, MES_MARCO, DIA_10), // Março de 2021
        dataUltimoLogin: new Date(DATA_2023, MES_DEZEMBRO, DIA_25), // Dezembro de 2023
        ativo: false,
        tentativasLogin: 80,
        numeroAcessos: 7
    })
];

// Exemplo de uso das constantes e objetos para manipular as instâncias
usuarios.forEach(usuario => {
    console.log(`Usuário: ${usuario.nome}, Cargo: ${usuario.cargo}, Ativo: ${usuario.ativo}`);
});
