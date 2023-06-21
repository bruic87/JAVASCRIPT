function converteTemperatura (temperaturaEmCelsius, unidadeDeConversao) {
    if (unidadeDeConversao === 'kelvin') {
        return temperaturaEmCelsius + 273.15
    } else if (unidadeDeConversao === 'farenhait') {
        return (temperaturaEmCelsius * 9 / 5) + 32
    } else {
        console.warn('Unidade de conversão inválida')
        return null
    }
}

console.log(converteTemperatura (30, 'farenhait'))