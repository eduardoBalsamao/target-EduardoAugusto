const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

function calcular(faturamentoObj) {
    var total = faturamentoObj.SP + faturamentoObj.RJ + faturamentoObj.MG + faturamentoObj.ES + faturamentoObj.Outros

    console.log("Porcentagem de SP: %d", Math.round((faturamentoObj.SP / total) * 100), "%")
    console.log("Porcentagem de RJ: %d", Math.round((faturamentoObj.RJ / total) * 100), "%")
    console.log("Porcentagem de MG: %d", Math.round((faturamentoObj.MG / total) * 100), "%")
    console.log("Porcentagem de ES: %d", Math.round((faturamentoObj.ES / total) * 100), "%")
    console.log("Porcentagem de Outros: %d", Math.round((faturamentoObj.Outros / total) * 100), "%")
}

calcular(faturamentoMensal)