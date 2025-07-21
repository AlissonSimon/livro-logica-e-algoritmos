const formulario = document.querySelector('form');
const imgClube = document.querySelector('#imgClube');
const divTitulo = document.querySelector('#divTitulo');

const trocarClube = () => {
    let clube;

    if (formulario.rbBrasil.checked) {
        clube = 'Brasil';
    } else if (formulario.rbPelotas.checked) {
        clube = 'Pelotas';
    } else {
        clube = 'Farroupilha';
    }

    divTitulo.className = `row cores-${clube}`;

    imgClube.src = `../img/${clube.toLowerCase()}.png`;
    imgClube.className = 'img-fluid';
    imgClube.alt = `Símbolo do ${clube}`;

    localStorage.setItem('clube', clube);
}

formulario.rbBrasil.addEventListener('change', trocarClube);
formulario.rbPelotas.addEventListener('change', trocarClube);
formulario.rbFarroupilha.addEventListener('change', trocarClube);

const verificarClube = () => {
    if (localStorage.getItem('clube')) {
        const clube = localStorage.getItem('clube');

        if (clube === 'Brasil') {
            formulario.rbBrasil.checked = true;
        } else if (clube === 'Pelotas') {
            formulario.rbPelotas.checked = true;
        } else {
            formulario.rbFarroupilha.checked = true;
        }

        trocarClube();
    }
}

window.addEventListener('load', verificarClube);
