const formulario = document.querySelector('form');
const outFrutas = document.getElementById('outFrutas');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const fruta = formulario.inFruta.value;
    const numero = Number(formulario.inQuantidade.value);
    let resultado = '';

    for (let i = 1; i <= numero; i++) {
        resultado += fruta;

        if (i < numero) { resultado += ' * ' }
    }

    outFrutas.innerText = resultado;
});
