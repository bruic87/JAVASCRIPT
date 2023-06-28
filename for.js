const listaNomesAluno = ["João", "Maria", "José", "Ana", "Pedro", "Elisa"];

// for (let i = 0; i < listaNomesAluno.length; i++) {
//     const item = listaNomesAluno[i];
//     console.log(`Aluno: ${item}`);
// }

function imprimeAluno(nomeAluno) {
    console.log(`Aluno: ${nomeAluno}`);
}

listaNomesAluno.forEach(imprimeAluno);

listaNomesAluno.forEach(function(nomeAluno) {
    console.log(`Aluno: ${nomeAluno}`);
});

listaNomesAluno.forEach(nomeAluno => {
    console.log(`Aluno: ${nomeAluno}`)
});

listaNomesAluno.forEach(nomeAluno => console.log(`Aluno: ${nomeAluno}`));