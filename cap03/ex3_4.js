/*
Ler peso em kg
Ler consumo do gato em gramas
Informar duração e sobra da ração em gramas
*/
const prompt = require('prompt-sync')();
const pesoKg = Number(prompt('Peso da Ração (kg): '));
const consumoDiario = Number(prompt('Consumo diário (gr): '));
const pesoGr = pesoKg * 1000;
const duracao = Math.floor(pesoGr / consumoDiario);
const sobra = pesoGr % consumoDiario;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);
