const formulario = document.querySelector('form');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const numero = Number(formulario.inNumero.value);
    let temDivisor = 0;

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            temDivisor = i;
            break;
        }
    }

    if (numero > 1 && !temDivisor) {
        resultado.innerText = `O número ${numero} é primo`;
    } else {
        resultado.innerText = `O número ${numero} não é primo`;
    }
});
