const formulario = document.querySelector('form');
const resposta = document.querySelector('div');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const horarioNoBrasil = Number(formulario.inHoraBrasil.value);
    let horarioNaFranca = horarioNoBrasil + 5;

    if (horarioNaFranca > 24) {
        horarioNaFranca = horarioNaFranca - 24;
    }

    resposta.innerText = `Horário na França: ${horarioNaFranca.toFixed(2).replace('.', ':')}`;
})
