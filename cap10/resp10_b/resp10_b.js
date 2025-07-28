const formulario = document.querySelector('form');
const resultado = document.getElementById('partesNome');

const carregarNome = () => {
    const nomeSalvo = localStorage.getItem('nome');
    if (nomeSalvo) { partesNome(resultado, nomeSalvo); }
}

const adicionarNome = (event) => {
    event.preventDefault();

    const nome = formulario.nome.value.trim();
    if (!validarNome(nome)) { return; }

    partesNome(resultado, nome);
    formatarCampos(nome);

    localStorage.setItem('nome', nome);
}

const validarNome = (nome) => {
    const regex = /^[A-Za-zÀ-ÿ]{2,}( [A-Za-zÀ-ÿ]{2,})+$/;
    return regex.test(nome);
}

const partesNome = (container, nome) => {
    resultado.innerHTML = ''; // Remove H3 anteriores antes de exibir novamente conforme o enunciado

    const partes = nome.split(' ');
    partes.forEach(parte => {
        const h3 = document.createElement('h3');
        h3.textContent = String(parte);
        h3.style.color = gerarCorAleatoria();
        container.appendChild(h3);
    });
    return partes;
}

const formatarCampos = (nome) => {
    formulario.nome.value = nome;
    formulario.nome.focus()
}

const gerarCorAleatoria = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

formulario.addEventListener('submit', adicionarNome);
window.addEventListener('load', carregarNome);