const prompt = require('prompt-sync')();
const numero = Number(prompt('Número (centena): '));

if (numero < 100 || numero >= 1000) {
    console.log('Ops, o número deve ser uma centena');
    return;
}

/*
356 / 100 = 3 -> Primeiro número
356 % 100 = 56
56 / 10 = 5 -> Segundo número
56 % 10 = 6 -> Terceiro número
*/
const num1 = Math.floor(numero / 100);
const sobra = numero % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10;

console.log(`Invertido: ${num3}${num2}${num1}`);
