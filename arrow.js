let subtracao = (num1, num2) => {
    return num1 - num2
}

let soma = (num1, num2) => {
    return num1 + num2
}

let multiplicacao = (num1, num2) => {
    return num1 * num2
}

let executaOperacao = (operacao, num1, num2) => {
    return operacao(num1, num2)
}

let resultado = executaOperacao(subtracao, 10, 5)
console.log(resultado)