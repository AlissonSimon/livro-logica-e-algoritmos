const inRadios = document.querySelectorAll('input');
const imgClube = document.querySelector('#imgClube');
const divTitulo = document.querySelector('#divTitulo');
const visitasLoja = document.getElementById('visitasLoja');

const clubes = ['Brasil', 'Pelotas', 'Farroupilha'];

const contadorVisitas = () => {
    let visitas = localStorage.getItem('contadorVisitas');
    let mensagem;

    if (visitas === null) {
        visitas = 1;
        mensagem = 'Muito bem, esta é sua primeira visita ao nosso site.';
    } else {
        visitas = parseInt(visitas) + 1;
        mensagem = `Que bom que você voltou! Esta é a sua visita de número ${visitas} ao nosso site.`;
    }

    localStorage.setItem('contadorVisitas', `${visitas}`);

    visitasLoja.textContent = mensagem;
}

const trocarClube = () => {
    let selecao;

    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i;
            break;
        }
    }

    if (selecao <= 2) {
        divTitulo.className = `row cores-${clubes[selecao]}`;

        imgClube.src = `../img/${clubes[selecao].toLowerCase()}.png`;
        imgClube.className = 'img-fluid';
        imgClube.alt = `Símbolo do ${clubes[selecao]}`;

        localStorage.setItem('clube', clubes[selecao]);
    } else {
        divTitulo.className = `row`;

        imgClube.className = 'd-none';
        imgClube.alt = '';

        localStorage.removeItem('clube');
    }
}

for (const inRadio of inRadios) {
    inRadio.addEventListener('change', trocarClube);
}

const verificarClube = () => {
    if (localStorage.getItem('clube')) {
        const clube = localStorage.getItem('clube');

        if (clube === 'Brasil') {
            inRadios[0].checked = true;
        } else if (clube === 'Pelotas') {
            inRadios[1].checked = true;
        } else {
            inRadios[2].checked = true;
        }

        trocarClube();
    }
}

window.addEventListener('load', verificarClube);
window.addEventListener('load', contadorVisitas);