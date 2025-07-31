const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const palavra = formulario.palavra.value.trim();
    const dica = formulario.dica.value;

    if (palavra.includes(' ')) {
        alert('Informe uma palavra válida (sem espaços)');
        formulario.palavra.focus();
        return;
    }

    if (localStorage.getItem('jogoPalavras')) {
        localStorage.setItem('jogoPalavras', localStorage.getItem('jogoPalavras') + ';' + palavra);
        localStorage.setItem('jogoDicas', localStorage.getItem('jogoDicas') + ';' + dica);
    } else {
        localStorage.setItem('jogoPalavras', palavra);
        localStorage.setItem('jogoDicas', dica);
    }

    if (localStorage.getItem('jogoPalavras')) {
        alert(`Ok! Palavra ${palavra} cadastrada com sucesso!`);
    }

    formulario.reset();
    formulario.palavra.focus();
});
