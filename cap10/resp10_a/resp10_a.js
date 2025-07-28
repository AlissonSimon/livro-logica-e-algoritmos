const formulario = document.querySelector('form');
const inserirImagem = document.getElementById('inserirImagem');

const adicionarIdade = (event) => {
    event.preventDefault();

    const idade = Number(formulario.idade.value);
    if (!validarIdade(idade)) { return; }

    const idadeString = idadeStr(idade);
    adicionarImagem(idadeString, inserirImagem);

    localStorage.setItem('idadeSalva', idade.toString());
}

const carregarIdade = () => {
    const idadeSalva = localStorage.getItem('idadeSalva');
    if (idadeSalva) {
        const idade = Number(idadeSalva);
        if (validarIdade(idade)) {
            const idadeString = idadeStr(idade);
            adicionarImagem(idadeString, inserirImagem);
            formulario.idade.value = idade;
        } else {
            localStorage.removeItem('idadeSalva');
        }
    }
}

const validarIdade = (idade) => {
    if (!idade || idade < 1 || idade > 120) {
        alert('Por favor, adicione uma idade válida.');
        formulario.reset();
        inserirImagem.innerHTML = '';
        return false;
    }
    return true;
}

const idadeStr = (idade) => idade.toString();

const criarImagem = (numero, textoAlt) => {
    const img = document.createElement('img');
    img.src = `../img/${numero}.png`;
    img.alt = textoAlt;
    img.classList.add('vela-img');
    return img;
}

const adicionarImagem = (idadeString, container) => {
    container.innerHTML = '';
    for (let digito of idadeString) {
        const img = criarImagem(digito, `Imagem: Número ${digito}`);
        container.appendChild(img);
    }
}

const novasVelas = () => {
    formulario.reset();
    inserirImagem.innerHTML = '';
    localStorage.removeItem('idadeSalva');
    formulario.idade.focus()
}

formulario.addEventListener('submit', adicionarIdade);
window.addEventListener('load', carregarIdade);
formulario.btnNovasVelas.addEventListener('click', novasVelas);