const formulario = document.querySelector('form');
const resultado = document.querySelector('#resultado');

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const num = Number(formulario.inNumero.value);
    let estrelas = '';

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + '*';
        } else {
            estrelas = estrelas + '-';
        }
    }

    resultado.innerText = estrelas;
});
