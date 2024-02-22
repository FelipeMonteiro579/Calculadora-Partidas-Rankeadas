const prompt = require("prompt-sync")();

console.log("=====================================");
console.log("    Calculo de Partidas Rankeadas    ");
console.log("=====================================");

let vitoria = prompt("Insira o numero de vitorias: ");
let derrota = prompt("Insira o numero de derroras: ");

function partidas(vitorias, derrotas) {
    let saldoRankeadas = vitorias - derrotas;
    return saldoRankeadas;
}

partidas(vitoria, derrota);

function rank() {

    let rankHeroi;
    let saldoVitorias = partidas(vitoria, derrota);
    let saldo;

    saldo = (saldoVitorias >= 0) ? "positivo" : "negativo";

    if (saldoVitorias <= 10) {

        rankHeroi = "Ferro";

    } else if(saldoVitorias >= 11 && saldoVitorias <= 20) {
        
        rankHeroi = "Bronze";

    }else if(saldoVitorias >= 21 && saldoVitorias <= 50) {
        
        rankHeroi = "Prata";

    }else if(saldoVitorias >= 51 && saldoVitorias <= 80) {
        
        rankHeroi = "Ouro";

    }else if(saldoVitorias >= 81 && saldoVitorias <= 90) {
        
        rankHeroi = "Diamante";

    }else if(saldoVitorias >= 91 && saldoVitorias <= 100) {
        
        rankHeroi = "Lendário";

    }else if(saldoVitorias >= 101) {
        
        rankHeroi = "Imortal";

    }
    console.log(`O Herói tem de saldo ${saldo} de ${saldoVitorias} vitorias e está no nível de ${rankHeroi}`)
}

rank();

//npm install prompt-sync