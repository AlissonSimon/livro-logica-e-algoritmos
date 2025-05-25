/*
Somar 2 números
*/
const prompt = require('prompt-sync')();
const numeroX = Number(prompt('Primeiro número: '));
const numeroY = Number(prompt('Segundo número: '));
const soma = numeroX + numeroY;

console.log(`Soma é: ${soma}`);
