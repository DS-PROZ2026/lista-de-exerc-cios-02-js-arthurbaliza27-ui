const sc = require('prompt-sync')();

const modelos = ["Duster", "Creta", "Nirvus", "Pulse", "Compass"];
const preco = [110000, 135000, 128000, 105000, 180000];

const orcamento = Number(sc("Digite seu orçamento máximo: "));
let encontrou = false;

for (let i in modelos) {
    if (precos[i] <= orcamento) {
        console.log(`${modelos[i]} - R$${precos[i]}`);
        encontrou = true;
    }
}

if (!encontrou) {
    console.log("Que tal olhar nossa seção de seminovos?");
}