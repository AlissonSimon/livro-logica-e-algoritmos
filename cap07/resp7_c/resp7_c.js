const formulario = document.querySelector('form');
const resultadoData = document.getElementById('resultadoData');
const resultadoMulta = document.getElementById('resultadoMulta');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const dataInput = formulario.data.value;
    const valorMulta = Number(formulario.multa.value);

    const dataInfracao = new Date(dataInput);

    const dataLimite = new Date(dataInfracao);
    dataLimite.setDate(dataLimite.getDate() + 90);

    const valorDesconto = valorMulta * 0.8;

    const dataFormatada = dataLimite.toLocaleDateString('pt-BR');

    resultadoData.textContent = `Data Limite para Pagto com Desconto: ${dataFormatada}`;
    resultadoMulta.textContent = `Valor com Desconto R$: ${valorDesconto.toFixed(2)}`;
});
