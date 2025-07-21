const formulario = document.querySelector('form');
const respostaLista = document.querySelector('pre');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = formulario.inNome.value;
    const peso = Number(formulario.inPeso.value);

    if (verApostaExiste(peso)) {
        alert('Alguém já apostou esse peso, informe outro...');
        formulario.inPeso.focus();
        return;
    }

    if (localStorage.getItem('melanciaNome')) {
        const melanciaNome = localStorage.getItem('melanciaNome') + ';' + nome;
        const melanciaPeso = localStorage.getItem('melanciaPeso') + ';' + peso;
        localStorage.setItem('melanciaNome', melanciaNome);
        localStorage.setItem('melanciaPeso', melanciaPeso);
    } else {
        localStorage.setItem('melanciaNome', nome);
        localStorage.setItem('melanciaPeso', `${peso}`);
    }

    mostrarApostas();
    formulario.reset();
    formulario.inNome.focus();
});

const verApostaExiste = (peso) => {
    if (localStorage.getItem('melanciaPeso')) {
        const pesos = localStorage.getItem('melanciaPeso').split(';');
        return pesos.includes(String(peso));
    } else {
        return false;
    }
}

const mostrarApostas = () => {
    if (!localStorage.getItem('melanciaNome')) {
        respostaLista.innerText = '';
        return
    }

    const nomes = localStorage.getItem('melanciaNome').split(';');
    const pesos = localStorage.getItem('melanciaPeso').split(';');

    let linhas = '';

    for (let i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + '-' + pesos[i] + 'gr\n';
    }

    respostaLista.innerText = linhas;
}

window.addEventListener('load', mostrarApostas);

formulario.btnVencedor.addEventListener('click', () => {
    if (!localStorage.getItem('melanciaNome')) {
        alert('Não há apostas cadastradas');
        return;
    }

    const pesoCorreto = Number(prompt('Qual o peso correto da melancia?'));
    if (pesoCorreto === 0 || isNaN(pesoCorreto)) { return; }

    const nomes = localStorage.getItem('melanciaNome').split(';');
    const pesos = localStorage.getItem('melanciaPeso').split(';');

    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);

    for (let i = 1; i < nomes.length; i++) {
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        if (difAposta < difVencedor) {
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
        }
    }

    let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
    mensagem += '\n------------------------';
    mensagem += `\nVencedor: ${vencedorNome}`;
    mensagem += `\nAposta: ${vencedorPeso}gr`;
    alert(mensagem);
});

formulario.btnLimpar.addEventListener('click', () => {
    if (confirm('Confirma a exclusão de todas as apostas?')) {
        localStorage.removeItem('melanciaNome');
        localStorage.removeItem('melanciaPeso');

        mostrarApostas();
    }
})