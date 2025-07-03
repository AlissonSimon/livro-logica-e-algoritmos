const formulario = document.querySelector('form');
const resultado = document.getElementById('resultado');

formulario.btnCriptografar.addEventListener('click', () => {
    const mensagem = formulario.mensagem.value;

    let pares = '';
    let impares = '';

    for (let i = 0; i < mensagem.length; i++) {
        if (i % 2 === 0) {
            pares += mensagem[i];
        } else {
            impares += mensagem[i];
        }
    }

    const criptografada = impares + pares;

    resultado.innerText = `Mensagem criptografada: ${criptografada}`;
});

formulario.btnDescriptografar.addEventListener('click', () => {
    const mensagem = formulario.mensagem.value;

    resultado.innerText = `Mensagem descriptografada: ${mensagem}`;
});
