/*
Ler o valor de cada 15 minutos de uso
Ler o tempo de uso do cliente
Informar o valor a ser pago considerando que as frações extras de 15 minutos devem ser cobradas de forma integral
*/
const formulario = document.querySelector('form');
const respostaUm = document.querySelector('#outResp1');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const valorIntegralMinutos = Number(formulario.inValor.value);
    const tempoUso = Number(formulario.inTempo.value);
    const blocos = Math.ceil(tempoUso / 15);
    const total = blocos * valorIntegralMinutos;

    respostaUm.innerText = `Valor a pagar R$: ${total.toFixed(2).replace('.', ',')}`;
});
