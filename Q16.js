const pessoas = [
    { nome: "Carlos", idade: 22 },
    { nome: "Maria", idade: 30 },
    { nome: "João", idade: 18 },
    { nome: "Fernanda", idade: 27 },
    { nome: "Lucas", idade: 35 }
];

let somaIdades = 0

let maisVelha = pessoas[0].idade
let nomeMaisVelha = pessoas[0].nome

for (let i = 0; i < pessoas.length; i++) {

    somaIdades += pessoas[i].idade

    if (pessoas[i].idade > maisVelha) {
        maisVelha = pessoas[i].idade
        nomeMaisVelha = pessoas[i].nome
    }

}

let media = somaIdades / pessoas.length

console.log("Média de idade:", media)
console.log("Pessoa mais velha:", nomeMaisVelha)