const formulario = document.querySelector('form');
const respostaLista = document.querySelector('pre');
const respostaCavalo = document.getElementById('saidaCavalo');

const CAVALOS = ['Marujo', 'Tordilho', 'Belga', 'Twister', 'Jade', 'Lucky'];

const apostas = [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const cavalo = Number(formulario.cavalo.value);
    const valor = Number(formulario.valor.value);

    apostas.push({ cavalo, valor });

    let lista = `Apostas Realizadas\n${'-'.repeat(25)}\n`;

    for (const aposta of apostas) {
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;
    }

    respostaLista.innerText = lista;

    formulario.reset();
    formulario.cavalo.focus();
});

const obterCavalo = (num) => {
    const posicao = num - 1;
    return CAVALOS[posicao];
}

formulario.cavalo.addEventListener('blur', () => {
    if (formulario.cavalo.value === '') {
        respostaCavalo.innerText = '';
        return;
    }

    const numCavalo = Number(formulario.cavalo.value);

    if (!validarCavalo(numCavalo)) {
        alert('Nº do cavalo inválido');
        formulario.cavalo.focus();
        return;
    }

    const nome = obterCavalo(numCavalo);
    const contaNum = contarApostas(numCavalo);
    const total = totalizarApostas(numCavalo);

    respostaCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`;
});

const validarCavalo = (num) => {
    return num >= 1 && num <= CAVALOS.length;
}

const contarApostas = (num) => {
    let contador = 0;
    for (const aposta of apostas) {
        if (aposta.cavalo === num) {
            contador++;
        }
    }
    return contador;
}

const totalizarApostas = (num) => {
    let total = 0;
    for (const aposta of apostas) {
        if (aposta.cavalo === num) {
            total += aposta.valor;
        }
    }
    return total;
}

formulario.cavalo.addEventListener('focus', () => {
    formulario.cavalo.value = '';
    respostaCavalo.innerText = '';
});

formulario.btnResumo.addEventListener('click', () => {
    const somaApostas = [0, 0, 0, 0, 0, 0];

    for (const aposta of apostas) {
        somaApostas[aposta.cavalo - 1] += aposta.valor;
    }

    let resposta = `Nº Cavalo......... R$ Apostado\n${'-'.repeat(35)}\n`;
    CAVALOS.forEach((cavalo, i) => {
        resposta += `${i + 1} ${cavalo.padEnd(20)}`;
        resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`;
    });
    respostaLista.innerText = resposta;
});

formulario.btnGanhador.addEventListener('click', () => {
    const ganhador = Number(prompt('Nº Cavalo Ganhador: '));

    if (isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert('Cavalo Inválido');
        return;
    }

    const total = apostas.reduce((ac, aposta) => ac + aposta.valor, 0);

    let resumo = `Resultado Final do Páreo\n${'-'.repeat(30)}\n`;

    resumo += `Nº Total de Apostas: ${apostas.length}\n`;
    resumo += `Total Geral R$: ${total.toFixed(2)}\n\n`;
    resumo += `Ganhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
    resumo += `Nº de Apostas: ${contarApostas(ganhador)}\n`;
    resumo += `Total Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;

    respostaLista.innerText = resumo;

    formulario.btnApostar.disabled = true;
    formulario.btnGanhador.disabled = true;
    formulario.btnNovo.focus();
});

formulario.btnNovo.addEventListener('click', () => window.location.reload());
