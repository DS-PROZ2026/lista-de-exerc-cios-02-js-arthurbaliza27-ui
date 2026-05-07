const produtos =   ["Monitor", "Mouse", "Teclado", "Cabo HDMI"];
const quantidades = [10, 2, 8, 3];

for (const i in produtos) {
    if (quantidades[i] < 5) {
        console.log(produtos[i])
    }
    
    
}