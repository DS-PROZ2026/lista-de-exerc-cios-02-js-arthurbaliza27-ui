const nomes = ["Carlos", "Maria", "Ricardo", "João"]
let i = 0;
let encontrado = false

while (i < nomes.length) {
    if (nomes[i] === "Ricardo") {
        console.log("Usuário encontrado")
        encontrado = true
        break
    }
    i++
}

if (encontrado === false) {
  console.log("Não cadastrado");
}