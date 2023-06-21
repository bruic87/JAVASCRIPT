let nome = 'João';
let sobrenome = ('Silva'); 

const idade = 27;

let altura = null;

let endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'centro',
    cidade: 'Sao Paulo',
}

let nomeCompleto = `${nome} ${sobrenome}`;

let informacaoCompleta = `Meu nome é ${nomeCompleto} e eu tenho ${idade} anos de idade`;

let usuario = {
    nome: nome,
    sobrenome: sobrenome,
    nomeCompleto: nomeCompleto,
    idade: idade,
    informacaoCompleta: informacaoCompleta,
    endereco: endereco,
}

console.log(typeof usuario);
console.log(usuario);