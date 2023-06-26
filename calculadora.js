function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}

function imprimeResultado(num1, num2, resultado, operacao) {
    return `O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`
}

function calcula(num1, num2, operacao) {
    
    switch (operacao) {
        case '+':
            return soma(num1, num2);
        case '-':
            return subtracao(num1, num2);
        case '*':
            return multiplicacao(num1, num2);
        case '/':
            return divisao(num1, num2);
    }
}

function principal() {
    //Cria o prompt de entrada de dados
    const prompt = require('prompt-sync')();
    //Captura a operação desejada
    const operacao = prompt('Informe a operacao desejada (+, -, *, /): ');
    //Captura os números
    const num1 = Number(prompt('Informe o primeiro número: '));
    const num2 = Number(prompt('Informe o segundo número: '));
    //Calcula o resultado
    const resultado = calcula(num1, num2, operacao);
    //Gera a saída de texto
    const saidaDeTexto = imprimeResultado(num1, num2, resultado, operacao);
    //Imprime o resultado
    console.log(saidaDeTexto);
}

module.exports = {
    principal
}

//Roda o programa
//principal();