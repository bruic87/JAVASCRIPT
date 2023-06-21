const prompt = require('prompt-sync')();

const operacao = prompt('Informe a operacao desejada (+, -, *, /): ');

const num1 = Number(prompt('Informe o primeiro número: '));

const num2 = Number(prompt('Informe o segundo número: '));

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

function principal(num1, num2, operacao) {
    let resultado = 0;
    
    if (operacao === '+') {
        resultado = soma(num1, num2);
    }
    
    if (operacao === '-') {
        resultado = subtracao(num1, num2);;
    }

    if (operacao === '*') {
        resultado = multiplicacao(num1, num2);
    }

    if (operacao === '/') {
        resultado = divisao(num1, num2);
    }

    return imprimeResultado(num1, num2, resultado, operacao);
}

const output = principal(num1, num2, operacao);

console.log(output);