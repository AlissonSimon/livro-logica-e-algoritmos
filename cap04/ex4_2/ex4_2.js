const formulario = document.querySelector('form');
const respostaUm = document.querySelector('h3');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const nome = formulario.inNome.value;
    const masculino = formulario.inMasculino.checked;
    const altura = Number(formulario.inAltura.value);

    let peso;
    if (masculino) {
        peso = 22 * (altura * altura);
    } else {
        peso = 21 * (altura * altura);
    }

    respostaUm.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
});
