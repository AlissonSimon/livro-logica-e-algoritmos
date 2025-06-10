/*
Valor -- Tempo (min)
1,00 -- 30
1,75 -- 60
3,00 -- 120 -> tempo max
*/
const formulario = document.querySelector('form');
const resultadoTempoParquimetro = document.querySelector('#resultadoTempoParquimetro');
const resultadoTrocoParquimetro = document.querySelector('#resultadoTrocoParquimetro');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const valorParquimetro = Number(formulario.inValorParquimetro.value);
    const trocoTempoMinimo = valorParquimetro - 1;
    const trocoTempoIntermediario = valorParquimetro - 1.75;
    const trocoTempoMaximo = valorParquimetro - 3;

    if (valorParquimetro < 1) {
        resultadoTrocoParquimetro.innerText = `Valor insuficiente.`;
        resultadoTempoParquimetro.innerText = '';
        formulario.inValorParquimetro.value = '';
        return;
    } else if (valorParquimetro >= 3.00) {
        resultadoTempoParquimetro.innerText = `Tempo: 120 min`;
        resultadoTrocoParquimetro.innerText = `Troco R$: ${trocoTempoMaximo.toFixed(2).replace('.', ',')}`;
    } else if (valorParquimetro >= 1.75) {
        resultadoTempoParquimetro.innerText = `Tempo: 60 min`;
        resultadoTrocoParquimetro.innerText = `Troco R$: ${trocoTempoIntermediario.toFixed(2).replace('.', ',')}`;
    } else {
        resultadoTempoParquimetro.innerText = `Tempo: 30 min`;
        resultadoTrocoParquimetro.innerText = `Troco R$: ${trocoTempoMinimo.toFixed(2).replace('.', ',')}`;
    }
});
