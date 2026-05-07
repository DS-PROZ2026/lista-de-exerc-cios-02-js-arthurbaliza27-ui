const sc = require('prompt-sync')();

let atletas = []
const medalhas = ["Ouro","Prata","Bronze"]

console.log("Digite o nome de 5 atletas: \n")
for(let i = 0; i < 5; i++){
    atletas[i] = sc("- ")
}
for(let i= 0; i < 3; i++ ){
    console.log(`Medalha de ${medalhas[i]} para ${atletas[i]}`)
}
for(let i = 3; i < 5; i++){
    console.log(`Patticipante ${atletas[i]} recebeu medalha de honra`)
}