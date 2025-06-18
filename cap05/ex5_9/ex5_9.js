const prompt = require('prompt-sync')();
const produto = prompt('Produto: ');
const quantidadeEtiquetas = Number(prompt('Número de Etiquetas: '));

for (let i = 1; i <= quantidadeEtiquetas / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`);
}

if (quantidadeEtiquetas % 2 == 1) {
    console.log(produto);
}
