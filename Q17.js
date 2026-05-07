const viagens = [
    { destino: "Rio de Janeiro", passagem: 1200, hospedagem: 800 },
    { destino: "São Paulo", passagem: 900, hospedagem: 600 },
    { destino: "Salvador", passagem: 1500, hospedagem: 1000 },
    { destino: "Curitiba", passagem: 700, hospedagem: 500 },
    { destino: "Fortaleza", passagem: 1800, hospedagem: 1200 },
    { destino: "Recife", passagem: 950, hospedagem: 700 },
    { destino: "Brasília", passagem: 1100, hospedagem: 650 },
    { destino: "Natal", passagem: 1300, hospedagem: 900 },
    { destino: "Manaus", passagem: 2000, hospedagem: 1400 },
    { destino: "Florianópolis", passagem: 850, hospedagem: 750 }
];
let somaPassagens = 0
let maisCaro = viagens[0].passagem
let destinoMaisCaro = viagens[0].destino
let barato = false

for (let i = 0; i < viagens.length; i++) {
    somaPassagens += viagens[i].passagem

    if (viagens[i].passagem > maisCaro) {
        maisCaro = viagens[i].passagem
        destinoMaisCaro = viagens[i].destino
    }
    if (viagens[i].passagem < 1000) {
        barato = true
    }
}

let media = somaPassagens / viagens.length
console.log("Média das passagens:", media)
console.log("Destino mais caro:", destinoMaisCaro)

if (barato) {
    console.log("Existe destino abaixo de R$1000")
} else {
    console.log("Nenhum destino abaixo de R$1000")
}