const prompt = require('prompt-sync')();
const valorConta = Number(prompt('Valor da Conta R$: '));
const quantidadeParcelas = Number(prompt('Quantidade de Parcelas: '));
const valorParcelas = Math.floor(valorConta / quantidadeParcelas);
const valorFinal = valorParcelas + (valorConta % quantidadeParcelas);

for (let i = 1; i < quantidadeParcelas; i++) {
    console.log(`${i}ª Parcela: R$ ${valorParcelas.toFixed(2)}`);
}

console.log(`${quantidadeParcelas}ª Parcela: R$ ${valorFinal.toFixed(2)}`);
