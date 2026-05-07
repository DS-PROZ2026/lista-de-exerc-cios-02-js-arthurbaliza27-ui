const sc = require('prompt-sync')();

const listaP = ["Jhon", "Claudio", "Marcos", "Ale", "Sadir"];
let listaB = [];

console.log("--- CADASTRE 3 VISITANTES ---")
for (let  i = 0; i < 3; i++){
    let nome = sc(`- `);
    if(listaP.includes(nome)){      //caso o nome esteja incluido no array -> ".includes()";  caso queira ver se o elemento não esteja no array -> "!array.includes()"
        console.log(`ALERTA: Seguraça acionada para o visitante ${nome}`);
    }else{
        listaB.push(nome) //push = adiciona no final do array; unshift = adiciona no inicio
    }
}
console.log("\n___Adicionados a lista Branca___")
console.log(listaB)