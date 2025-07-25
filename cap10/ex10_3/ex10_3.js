const formulario = document.querySelector('form');
const tbFilmes = document.querySelector('table');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const titulo = formulario.titulo.value;
    const genero = formulario.genero.value;

    inserirLinha(titulo, genero);
    gravarFilme(titulo, genero);

    formulario.reset();
    formulario.titulo.focus();
});

const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1);

    const col1 = linha.insertCell(0);
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    col1.innerText = titulo;
    col2.innerText = genero;
    col3.innerHTML = '<i class="exclui" title="Excluir">&#10008;</i>';
}

const gravarFilme = (titulo, genero) => {
    if (localStorage.getItem('filmesTitulo')) {
        const filmesTitulo = localStorage.getItem('filmesTitulo') + ';' + titulo;
        const filmesGenero = localStorage.getItem('filmesGenero') + ';' + genero;
        localStorage.setItem('filmesTitulo', filmesTitulo);
        localStorage.setItem('filmesGenero', filmesGenero);
    } else {
        localStorage.setItem('filmesTitulo', titulo);
        localStorage.setItem('filmesGenero', genero);
    }
}

window.addEventListener('load', () => {
    if (localStorage.getItem('filmesTitulo')) {
        const titulos = localStorage.getItem('filmesTitulo').split(';');
        const generos = localStorage.getItem('filmesGenero').split(';');

        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i]);
        }
    }
});

tbFilmes.addEventListener('click', (event) => {
    if (event.target.classList.contains('exclui')) {
        const titulo = event.target.parentElement.parentElement.children[0].innerText;

        if (confirm(`Confirma exclusão do Filme "${titulo}"?`)) {
            event.target.parentElement.parentElement.remove();

            localStorage.removeItem('filmesTitulo');
            localStorage.removeItem('filmesGenero');

            for (let i = 1; i < tbFilmes.rows.length; i++) {
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
                const auxGenero = tbFilmes.rows[i].cells[1].innerText;
                gravarFilme(auxTitulo, auxGenero);
            }
        }
    }
});