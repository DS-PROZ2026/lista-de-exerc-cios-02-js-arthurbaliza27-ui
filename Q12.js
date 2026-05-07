const consumo = [20, 15, 30, 18, 25, 40]
let total = 0
let maior = consumo[0]
let diaMaior = 0

for (let i = 0; i < consumo.length; i++) {
    total += consumo[i]

    if (consumo[i] > maior) {
        maior = consumo[i]
        diaMaior = i
    }
}

let media = total / consumo.length

console.log("Consumo Total:", total)
console.log("Média Diária:", media)
console.log("Maior Consumo:", maior)
console.log("Dia do Maior Consumo:", diaMaior + 1)