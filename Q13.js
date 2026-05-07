const temperaturas = [30, 36, 40, 28, 37, 33]
let soma = 0
let maior = temperaturas[0]
let alerta = 0

for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas[i]
    if (temperaturas[i] > maior) {
        maior = temperaturas[i]
    }
    if (temperaturas[i] > 35) {
        alerta++
    }
}

let media = soma / temperaturas.length

console.log("Temperatura Média:", media)
console.log("Maior Temperatura:", maior)
console.log("Sensores em Alerta:", alerta)