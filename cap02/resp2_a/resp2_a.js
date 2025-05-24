/*
Na compra de duas unidades do mesmo medicamento,recebe-se o desconto em centavos
Ler medicamento
Ler preço
Informar o valor de duas unidades com desconto
*/
const formulario = document.querySelector('form');
const respostaUm = document.querySelector('#outResp1');
const respostaDois = document.querySelector('#outResp2');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const medicamento = formulario.inMedicamento.value;
    const preco = Number(formulario.inPreco.value);
    const valorSemDesconto = preco * 2;
    const valorComDesconto = Math.floor(valorSemDesconto);

    respostaUm.innerText = `Promoção de ${medicamento}`;
    respostaDois.innerText = `Leve 2 por apenas ${valorComDesconto.toFixed(2).replace('.', ',')}`;
});
