const formulario = document.querySelector('form');
const resposta = document.querySelector('div');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const numero = Number(formulario.inNumero.value);
    const raiz = Math.sqrt(numero);

    if (Number.isInteger(raiz)) {
        resposta.innerText = `Raíz: ${raiz}`;
    } else {
        resposta.innerText = `Não há raiz exata para ${numero}`;
    }
});
