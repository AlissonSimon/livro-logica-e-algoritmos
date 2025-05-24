/*
Ler descrição de um produto
Ler preço de um produto
Mensagem da promoção
Mensagem descrevendo o preço da promoção
*/
const formulario = document.querySelector('form');
const respostaUm = document.querySelector('#outResp1');
const respostaDois = document.querySelector('#outResp2');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = formulario.inProduto.value;
    const preco = Number(formulario.inPreco.value);
    const produtoPromocional = preco / 2;
    const total = (preco + preco) + produtoPromocional;

    respostaUm.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2).replace('.', ',')}`;
    respostaDois.innerText = `O 3º produto custa apenas R$: ${produtoPromocional.toFixed(2).replace('.', ',')}`;
});
