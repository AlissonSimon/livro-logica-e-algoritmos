const prompt = require('prompt-sync')();

const saques = [];

console.log('Informe o valor dos saques ou digite "0" para sair.\n')

do {
    const valor = Number(prompt('Digite o Saque R$: '));
    if (valor === 0) { break; }

    saques.push(valor);

    if (valor % 10 === 0) {
        console.log('Saque concluído com sucesso');
    } else {
        console.log('Erro! Valor inválido (deve ser múltiplo de 10)');
    }
} while (true);

console.log('\nSaques Válidos');
console.log('-'.repeat(40));

const saquesValidos = saques.filter(saque => saque % 10 === 0);
saquesValidos.forEach(saque => { console.log(saque.toFixed(2)); });

console.log('-'.repeat(40));

const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);
console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`\nNº de Tentativas de Saque (saques inválidos): ${saquesInvalidos}`);
