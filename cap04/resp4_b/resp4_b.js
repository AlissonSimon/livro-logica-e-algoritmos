const formulario = document.querySelector('form');
const respostaSituacao = document.querySelector('div');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const velocidadePermitida = Number(formulario.inVelocidadePermitida.value);
    const velocidadeCondutor = Number(formulario.inVelocidadeCondutor.value);

    if (velocidadeCondutor <= velocidadePermitida) {
        respostaSituacao.innerText = `Situação: Sem Multa`;
    } else if (velocidadeCondutor <= velocidadePermitida * 1.2) {
        respostaSituacao.innerText = `Situação: Multa Leve`;
    } else {
        respostaSituacao.innerText = `Situação: Multa Grave`;
    }
});
