const formulario = document.querySelector('form');
const respostaPalavra = document.querySelector('#outPalavra');
const respostaErros = document.querySelector('#outErros');
const respostaDica = document.querySelector('#outDica');
const respostaChances = document.querySelector('#outChances');
const respostaMensagemFinal = document.querySelector('#outMensagemFinal');
const imgStatus = document.querySelector('img');

let palavraSorteada;
let dicaSorteada;

window.addEventListener('load', () => {
    if (!localStorage.getItem('jogoPalavras')) {
        alert('Cadastre palavras para jogar');
        formulario.letra.disabled = true;
        formulario.btnJogar.disabled = true;
        formulario.btnVerDica.disabled = true;
        return;
    }

    const palavras = localStorage.getItem('jogoPalavras').split(';');
    const dicas = localStorage.getItem('jogoDicas').split(';');

    const tam = palavras.length;
    const numAleatorio = Math.floor(Math.random() * tam);

    palavraSorteada = palavras[numAleatorio].toUpperCase();
    dicaSorteada = dicas[numAleatorio];

    let novaPalavra = '';

    for (const letra of palavraSorteada) {
        if (letra === palavraSorteada.charAt(0)) {
            novaPalavra += letra;
        } else {
            novaPalavra += '_';
        }
    }

    respostaPalavra.innerText = novaPalavra;
});

formulario.btnVerDica.addEventListener('click', () => {
    if (respostaErros.innerText.includes('*')) {
        alert('Você já solicitou a dica...');
        formulario.letra.focus();
        return;
    }

    respostaDica.innerText = ' * ' + dicaSorteada;
    respostaErros.innerText += '*';

    const chances = Number(respostaChances.innerText) - 1;
    respostaChances.innerText = chances;

    trocarStatus(chances);
    verificarFim();

    formulario.letra.focus();
});

const trocarStatus = (num) => {
    if (num > 0) {
        imgStatus.src = `../img/status${num}.jpg`;
    }
};

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const letra = formulario.letra.value.toUpperCase();
    let erros = respostaErros.innerText;
    let palavra = respostaPalavra.innerText;

    if (erros.includes(letra) || palavra.includes(letra)) {
        alert('Você já apostou esta letra');
        formulario.letra.focus();
        return;
    }

    let novaPalavra = '';
    let acertou = false;

    for (let i = 0; i < palavraSorteada.length; i++) {
        if (palavraSorteada.charAt(i) === letra) {
            novaPalavra += letra;
            acertou = true;
        } else {
            novaPalavra += palavra.charAt(i);
        }
    }

    if (acertou) {
        respostaPalavra.innerText = novaPalavra;
    } else {
        respostaErros.innerText += letra;
        const chances = Number(respostaChances.innerText) - 1;
        respostaChances.innerText = chances;
        trocarStatus(chances);
    }

    verificarFim();
    formulario.letra.value = '';
    formulario.letra.focus();
});

const verificarFim = () => {
    const chances = Number(respostaChances.innerText);

    if (chances === 0) {
        respostaMensagemFinal.className = 'display-3 text-danger';
        respostaMensagemFinal.innerText = `Ah... é ${palavraSorteada}. Você perdeu!`;
        concluirJogo();
    } else if (respostaPalavra.innerText === palavraSorteada) {
        respostaMensagemFinal.className = 'display-3 text-primary';
        respostaMensagemFinal.innerText = 'Parabéns!! Você ganhou.';
        trocarStatus(4);
        concluirJogo();
    }
};

const concluirJogo = () => {
    respostaDica.innerText = '';
    formulario.letra.disabled = true;
    formulario.btnJogar.disabled = true;
    formulario.btnVerDica.disabled = true;
};
