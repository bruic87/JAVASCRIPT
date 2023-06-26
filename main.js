const calculadora = require('./calculadora');
const idade = require('./idade');
const prompt = require('prompt-sync')({sigint: true});

function mostrarMenu(){
    console.log('+----------------------------------------+');
    console.log('|      Bem vindo ao menu principal!      |');
    console.log('+----------------------------------------+\n')
    console.log('Escolha uma opção para iniciar um dos programas disponíveis:\n');
    console.log('1 - Calculadora');
    console.log('2 - Verificador de idade');
    console.log('0 - Sair...');
}

let condicao = true;
do {
    mostrarMenu();
    const opcao = prompt('Informe a opção desejada: ')
    switch (opcao) {
        case '1':
            calculadora.principal();
            break;
        case '2':
            idade.principal();
            break;
        case '0':
            console.log('Saindo...');
            condicao = false;
            break;
        default:
            console.log('Opção inválida!');
    }
} while (condicao);

//calculadora.principal();