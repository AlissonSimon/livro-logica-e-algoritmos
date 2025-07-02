const formulario = document.querySelector('form');
const resultado = document.querySelector('span');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const fruta = formulario.fruta.value.toUpperCase();
    let resposta = '';

    for (const letra of fruta) {
        if (letra === fruta.charAt(0)) {
            resposta += letra.charAt(0);
        } else {
            resposta += ' _ ';
        }
    }

    resultado.innerText = resposta;
    formulario.fruta.value = '*'.repeat(fruta.length);
});
