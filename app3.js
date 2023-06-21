//Capturar o prompt do usuário
const prompt = require('prompt-sync')();

//Armazena a entrada do usuário na variável nome
const name = prompt('Digitte seu nome: ');

//Armazena a entrada do usuário na variável idade
const idade = prompt('Digite sua idade: ');

//Define maior idade
const maiorIdade = 18;

console.log(`Oi ${name}!`);
console.log(`Sua idade é ${idade}`);

if (idade < maiorIdade) {
    console.log(`Você não pode pagar boletos!`);
} else {
    console.log('Parabéns, já pode pagar boletos!')
}