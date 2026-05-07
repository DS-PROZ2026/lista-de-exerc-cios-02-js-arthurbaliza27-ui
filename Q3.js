const sc = require('prompt-sync')();

let mochila = []
const itensNC = ["lapis", "moedas", "caixa misteriosa", "Maçã", "folha Misteriosa", "Graveto Mágico",]
for(let i = 0; i < 6; i++){
    if (mochila.length < 4){
        mochila.push(itensNC[i])
    }else{
        console.log(`A mochila está cheia! Deseja retirar a/o ${mochila[3]} para incluir ${itensNC[i]} ao inventario? (s/n)`)
        let res = sc();
        if(res === "s"){
            mochila.pop();
            mochila.push(itensNC[i]);
        }
    }
}

console.log(`Status da Mochila: ${mochila}`)