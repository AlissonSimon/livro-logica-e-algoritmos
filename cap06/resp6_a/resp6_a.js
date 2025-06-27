const formulario = document.querySelector('form');
const resultado = document.getElementById('resultado');

const clubes = [];

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const clube = formulario.clube.value.trim();
    if (!clube) { return alert('Informe o nome do clube.') }
    if (clubes.includes(clube)) { return alert('Clube já adicionado.') }
    clubes.push(clube);

    formulario.clube.value = '';
    formulario.clube.focus();

    formulario.btnListar.dispatchEvent(new Event('click'));
});

formulario.btnListar.addEventListener('click', () => {
    if (clubes.length === 0) { return alert('Por favor, informe um clube.'); }

    const lista = clubes
        .map((clube, i) => `${i + 1}. ${clube}`)
        .join('\n');

    resultado.innerText = lista;
});

formulario.btnTabela.addEventListener('click', () => {
    if (clubes.length % 2 !== 0) { return alert('Por favor, adicione uma quantidade par de clubes.'); }

    const qtdClubes = clubes.length;
    let jogos = [];

    for (let i = 0; i < qtdClubes / 2; i++) {
        const casa = clubes[i];
        const fora = clubes[qtdClubes - 1 - i];

        jogos.push(`${casa} x ${fora}`);
    }

    resultado.innerText = jogos.join(`\n`);
});
