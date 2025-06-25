const prompt = require('prompt-sync')();

const clientes = [];

console.log('Informe os clientes em ordem de chegada. Logo após, digite "Fim" no nome para sair.');

do {
    const nome = prompt('Nome: ');
    if (nome === 'Fim' || nome === 'fim') { break; }

    const idade = Number(prompt('Idade: '));
    clientes.push({ nome, idade });

    console.log('Ok, cliente inserido para fila...');
} while (true);

console.log('-'.repeat(40));
console.log('Fila Preferencial:');

const filaPreferencial = clientes.filter(cliente => cliente.idade >= 60);
filaPreferencial.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
});

console.log('-'.repeat(40));
console.log('Fila Normal:');

const filaNormal = clientes.filter(cliente => cliente.idade < 60);
filaNormal.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
});
