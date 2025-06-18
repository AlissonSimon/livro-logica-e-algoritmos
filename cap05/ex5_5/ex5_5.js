const formulario = document.querySelector('form');
const outRespostaUm = document.querySelector('#outRespostaUm');
const outRespostaDois = document.querySelector('#outRespostaDois');

let resposta = '';
let numeroDeContas = 0;
let valorTotalContas = 0;

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const inDescricaoConta = formulario.inDescricaoConta.value;
    const inValorConta = Number(formulario.inValorConta.value);

    numeroDeContas++;
    valorTotalContas += inValorConta;

    resposta = resposta + inDescricaoConta + ' = R$: ' + inValorConta.toFixed(2) + '\n';

    outRespostaUm.innerText = `${resposta}------------------`;
    outRespostaDois.innerText = `${numeroDeContas} Conta(s) - Total R$: ${valorTotalContas.toFixed(2)}`;

    formulario.inDescricaoConta.value = '';
    formulario.inValorConta.value = '';
    formulario.inDescricaoConta.focus();
});
