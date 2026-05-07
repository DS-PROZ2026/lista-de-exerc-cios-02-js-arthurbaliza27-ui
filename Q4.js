const sc = require('prompt-sync')();

let tempe = []
let soma = 0;

console.log("Digite a temperatura registrada ao longo da semana (7 dias):");
for (let i = 0; i <7; i++){
    tempe[i] = Number(sc(`Dia ${i}: `))
    soma = soma + tempe[i];
}
const media = soma/7

const Ma = Math.max(...tempe) //os "..." antes de tempe é o spread operator, que "espalha" os valores do array, para que o Math.max consiga "ler" item por item
const Me = Math.min(...tempe);

console.log(`media de temperatura na ultima semana: ${media}`)
console.log(`Maior: ${Ma}`);
console.log(`Menor: ${Me}`);