const formulario = document.querySelector('form');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const nome = formulario.nomeParticipante.value.trim()

    if(!nome.includes(' ')) {
        alert('Informe o nome completo');
        return;
    }

    const priEspaco = nome.indexOf(' ');
    const ultEspaco = nome.lastIndexOf(' ');
    const cracha = nome.substring(0, priEspaco) + nome.substring(ultEspaco);

    resultado.innerText = `Crachá: ${cracha}`;
});
