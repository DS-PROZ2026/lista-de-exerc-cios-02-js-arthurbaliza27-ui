const consumo = [5, 8, 6, 10, 4]
let soma = 0
let maior = consumo[0]
let menor = consumo[0]

for (let i = 0; i < consumo.length; i++) {
    soma += consumo[i]

    if (consumo[i] > maior) {
        maior = consumo[i]
    }
    if (consumo[i] < menor) {
        menor = consumo[i]
    }
}
let media = soma / consumo.length

console.log("Média da Frota:", media)
console.log("Melhor Consumo:", maior)
console.log("Pior Consumo:", menor)