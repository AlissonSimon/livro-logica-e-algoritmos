const formulario = document.querySelector('form');
const respostaDecrescer = document.querySelector('#respostaDecrescer');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const numero = formulario.inNumero.value;
    let resposta = `Entre ${numero} e 1: `;

    for (let i = numero; i > 0; i--) {
        if (i == 1) {
            resposta = `${resposta}${i}.`;
        } else {
            resposta = `${resposta}${i}, `;
        }
    }

    respostaDecrescer.innerText = resposta;
});
