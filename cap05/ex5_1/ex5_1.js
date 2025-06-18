const formulario = document.querySelector('form');
const respostaTabuada = document.querySelector('#respostaTabuada');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const numero = Number(formulario.inNumero.value);
    let resposta = '';

    for (let i = 1; i <= 10; i++) {
        resposta += `${numero} x ${i} = ${numero * i}\n`;
    }

    respostaTabuada.innerText = resposta;
});
