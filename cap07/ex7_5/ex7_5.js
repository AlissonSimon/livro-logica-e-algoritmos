const formulario = document.querySelector('form');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const funcionario = formulario.funcionario.value;
    const partes = funcionario.split(' ');
    const tam = partes.length;
    let email = '';

    for (let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0);
    }

    email += partes[tam - 1] + '@empresa.com.br';

    resultado.innerText = `E-mail: ${email.toLowerCase()}`;
});
