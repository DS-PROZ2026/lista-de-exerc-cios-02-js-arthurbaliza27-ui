const frota = [
    { modelo: "Volvo FH",        km: 15000, ultimaRevisao: 3 },
    { modelo: "Scania R450",     km: 8000,  ultimaRevisao: 7 },
    { modelo: "Mercedes Actros", km: 4000,  ultimaRevisao: 2 },
    { modelo: "DAF XF",          km: 12000, ultimaRevisao: 8 },
    { modelo: "Iveco Stralis",   km: 9500,  ultimaRevisao: 5 },
];

let frotaManutencao = [];

for (let i in frota) {
    if (frota[i].km > 10000 || frota[i].ultimaRevisao > 6) { 
        frotaManutencao.push(frota[i].modelo);                
    }
}

console.log(`Um total de ${frotaManutencao.length} veículo(s) necessita(m) de manutenção!`);
console.log(frotaManutencao);