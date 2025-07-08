const formulario = document.querySelector('form');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const nomeAtleta = formulario.nomeAtleta.value;
    const idadeAtleta = Number(formulario.idadeAtleta.value);

    const tracos = retornarTracos(nomeAtleta);
    const categoria = categorizarAluno(idadeAtleta);

    resultado.innerText = `${nomeAtleta}\n${tracos}\n${categoria}`;
});

function retornarTracos(nome) {
    let resultado = '';

    for (let i = 0; i < nome.length; i++) {
        const char = nome[i];

        if (char === ' ') {
            resultado += char;
        } else {
            resultado += '-'
        }
    }

        return resultado;
}

function categorizarAluno(idade) {
    let classificar;

    if (idade <= 12) {
        classificar = 'Infantil';
    } else if (idade >= 13 && idade < 18) {
        classificar = 'Juvenil';
    } else {
        classificar = 'Adulto';
    }

    return classificar;
}
