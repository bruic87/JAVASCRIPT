function calculaMedia(notaAv1, notaAv2) {
return (notaAv1 + notaAv2) / 2;
}

function textoResultado(mediaDoAluno) {
    const MEDIA = 7;
    const NOTA_MINIMA_RECUPERACAO = 5;

    if (mediaDoAluno >= MEDIA) {
        return 'Aprovado!';
    } else if (mediaDoAluno < NOTA_MINIMA_RECUPERACAO) {
        return 'Reprovado';
    } else {
        return 'Recuperação';
    }
}

function textMediaAluno(nomeAluno, mediaDoAluno) {
    return `O aluno ${nomeAluno} ficou com média ${mediaDoAluno}: `
}

function principal() {
    const prompt = require('prompt-sync')();
    
    const nomeAluno = prompt('Digite o nome do aluno: ');
    
    const entradaNotaAv1 = prompt('Digite a nota da AV1 (0 a 10): ');
    const entradaNotaAv2 = prompt('Digite a nota da AV2 (0a 10): ');
    
    const notaAv1 = Number(entradaNotaAv1);
    const notaAv2 = Number(entradaNotaAv2);
    
    const nota = calculaMedia(notaAv1, notaAv2);
    const textoMedia = textMediaAluno(nomeAluno, nota);
    const resultado = textoResultado(nota);

    console.log(textoMedia);
    console.log(resultado);
}

principal();