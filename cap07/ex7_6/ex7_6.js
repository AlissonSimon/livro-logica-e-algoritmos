const formulario = document.querySelector('form');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const senha = formulario.senha.value;
    const erros = [];

    if (senha.length < 8 || senha.length > 15) { erros.push('possuir entre 8 e 15 caracteres'); }
    if (senha.match(/[0-9]/g) == null) { erros.push('possuir números (no mínimo 1)'); }
    if (!senha.match(/[a-z]/g)) { erros.push('possuir letras (no mínimo 1)'); }
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length === 1) { erros.push('possuir letras maíúsculas (no mínimo 2)'); }
    if (!senha.match(/[\W|_]/g)) { erros.push('possuir símbolos (no mínimo 1)'); }

    if (erros.length === 0) {
        resultado.innerText = 'Ok! Senha Válida';
    } else {
        resultado.innerText = `Erro... A senha deve ${erros.join(', ')}`;
    }
});
