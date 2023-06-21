//Fazer um programa que verifique se um numero é par ou ímpar

//Capturar o prompt do usuário
const prompt = require('prompt-sync')();

//Armazena a entrada do usuário na variável entradaDoUsuario
const entradaDoUsuario = prompt('Digite um número: ');

//Armazena o resto da divisão do número escolhido
const restoDaDivisao = entradaDoUsuario % 2;

//Imprime o número escolhido
console.log(`Seu número é: ${entradaDoUsuario}`)
//Imprime o tipo da variável
console.log(`Tipo da variável: `, typeof restoDaDivisao);
//Imprime o resto da divisão
console.log(`Expressão: `, restoDaDivisao);

//Imprime o resultado final
if (restoDaDivisao == 0) {
    console.log(`Esse número é par!`);
} else {
    console.log('Esse número é ímpar!')
}