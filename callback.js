function soma (num1, num2) {
    return num1 + num2
}

function subtracao (num1, num2) {
    return num1 - num2
}

function executaOperacao (operacao, num1, num2) {
    return operacao(num1, num2)
}

const resultado = executaOperacao(subtracao, 10, 4)
console.log(resultado)