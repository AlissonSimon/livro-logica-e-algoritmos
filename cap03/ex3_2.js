/*
Ler modelo
Valor do veiculo
Exibir entrada de 50% do valor
Exibir parcelas de até 12x do valor restante
*/
const prompt = require('prompt-sync')();
const modeloVeiculo = prompt('Modelo: ');
const precoVeiculo = Number(prompt('Preço: '));
const entrada = precoVeiculo / 2;
const parcelas = (precoVeiculo / 2) / 12;

console.log(`Promoção: ${modeloVeiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2).replace('.', ',')}`);
console.log(`+12 parcelas de R$${parcelas.toFixed(2).replace('.', ',')}`);
