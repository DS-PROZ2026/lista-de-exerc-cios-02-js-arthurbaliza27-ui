const manutencoes = [300, 450, 200, 600]
let total = 0
let maior = manutencoes[0]

for (let i = 0; i < manutencoes.length; i++) {
    total += manutencoes[i]

    if (manutencoes[i] > maior) {
        maior = manutencoes[i]
    }
}

let media = total / manutencoes.length

console.log("Custo Total:", total)
console.log("Custo Médio:", media)
console.log("Manutenção Mais Cara:", maior)