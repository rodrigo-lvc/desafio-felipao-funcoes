//Desafio do Felipão da DIO sobre funções!
function calcularNivel(vitorias, derrotas) {
    // Calculando o saldo
    let saldoVitorias = vitorias - derrotas;
    
    // Determinado seu ranque baseado no saldo de vitórias do herói!
    let nivel;
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Output que foi pedido! 
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

calcularNivel(20, 9);
