const prompt = require('prompt-sync')();

const alunos = [];

console.log('Informe os alunos. Após, digite "Fim" no nome para sair.');

do {
    const nome = prompt('Nome: ');
    if (nome === 'Fim' || nome === 'fim') { break; }

    const nota = Number(prompt('Nota: '));
    alunos.push({ nome, nota });

    console.log('Ok! Aluno(a) cadastrado(a)');
} while (true);

console.log('-'.repeat(40));

const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);
console.log(`Maior Nota: ${maior}`);

if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota === maior);
    destaques.forEach(destaque => {
        console.log(`- ${destaque.nome}`);
    });
} else {
    console.log('Não há alunos em destaque na turma');
}
