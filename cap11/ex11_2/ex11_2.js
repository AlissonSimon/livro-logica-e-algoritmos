const formulario = document.querySelector('form');
const divPalco = document.getElementById('divPalco');

const POLTRONAS = 240;

const reservadas = [];

window.addEventListener('load', () => {
    const ocupadas = localStorage.getItem('teatroOcupadas')
        ? localStorage.getItem('teatroOcupadas').split(';')
        : [];

    let divlinha;

    for (let i = 1; i <= POLTRONAS; i++) {
        if ((i - 1) % 24 === 0) {
            divLinha = document.createElement('div');
            divLinha.className = 'linha-poltronas';
            divPalco.appendChild(divLinha);
        }

        const figure = document.createElement('figure');
        const imgStatus = document.createElement('img');

        imgStatus.src = ocupadas.includes(i.toString())
            ? '../img/ocupada.png'
            : '../img/disponivel.png';
        imgStatus.className = 'poltrona';

        const figureCap = document.createElement('figcaption');
        const zeros = i < 10 ? '00' : i < 100 ? '0' : '';
        const num = document.createTextNode(`[${zeros}${i}]`);

        figure.appendChild(imgStatus);
        figureCap.appendChild(num);
        figure.appendChild(figureCap);

        if (i % 24 === 12) {
            figure.classList.add('corredor');
        }

        divLinha.appendChild(figure);
    }
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const poltrona = Number(formulario.poltrona.value);

    if (poltrona > POLTRONAS) {
        alert('Informa um número válido de poltrona');
        formulario.poltrona.focus();
        return;
    }

    const ocupadas = localStorage.getItem('teatroOcupadas')
        ? localStorage.getItem('teatroOcupadas').split(';')
        : [];

    if (ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona} já está ocupada...`);
        formulario.poltrona.value = '';
        formulario.poltrona.focus();
        return;
    }

    const imgPoltrona = divPalco.querySelectorAll('img')[poltrona - 1];

    imgPoltrona.src = '../img/reservada.png';

    reservadas.push(poltrona);

    formulario.poltrona.value = '';
    formulario.poltrona.focus();
});

formulario.btnConfirmar.addEventListener('click', () => {
    if (reservadas.length === 0) {
        alert('Não há poltronas reservadas');
        formulario.poltrona.focus();
        return
    }

    const ocupadas = localStorage.getItem('teatroOcupadas')
        ? localStorage.getItem('teatroOcupadas').split(';')
        : [];

    for (let i = reservadas.length - 1; i >= 0; i--) {
        const poltrona = reservadas[i];

        const imgPoltrona = divPalco.querySelectorAll('img')[poltrona - 1];
        imgPoltrona.src = '../img/ocupada.png';

        ocupadas.push(poltrona.toString());
        reservadas.pop();
    }

    localStorage.setItem('teatroOcupadas', ocupadas.join(';'));
});
