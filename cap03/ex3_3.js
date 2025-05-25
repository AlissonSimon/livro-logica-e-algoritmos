/*
Ler salário
Ler tempo trabalhado
A cada 4 anos, colaborador recebe acréscimo de 1% no salário
*/
const prompt = require('prompt-sync')();
const salarioAtual = Number(prompt('Salário: '));
const tempoTrabalhado = Number(prompt('Tempo trabalhado: '));
const quadrienios = Math.floor(tempoTrabalhado / 4);
const salarioAumento = salarioAtual * quadrienios / 100;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${(salarioAtual + salarioAumento).toFixed(2).replace('.', ',')}`);
