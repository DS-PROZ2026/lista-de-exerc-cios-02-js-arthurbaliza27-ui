const nomesV = ["Carlos", "Ana", "Pedro", "Julia", "Marcos"];
const totalV = [  8500,    9200,  6100,    7800,     5400   ];
let dest // Destaque
let abaixoM // Quem está abaixo da media
let media

for (let i in totalV) {
    media = (totalV[i])/ totalV.length
}// Fazendo a média

for (let i in totalV) {

    dest[i] = Math.max(...totalV)
    let j = totalV.indexOf(dest[i])
    dest[i] = nomesV[j]

    if (totalV[i] < media) {
        abaixoM = nomesV[i]
    }
}
console.log(`O vendedor destaque foi ${dest} e o vendedor abaixo da meta foi ${abaixoM}`);
