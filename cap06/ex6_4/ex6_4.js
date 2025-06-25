const formulario = document.querySelector('form');
const resultadoLista = document.getElementById('resultadoLista');

const criancas = [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeCrianca = formulario.inputNomeCrianca.value;
    const idadeCrianca = Number(formulario.inputIdadeCrianca.value);

    criancas.push({ nomeCrianca, idadeCrianca });

    formulario.reset();
    formulario.inputNomeCrianca.focus();
    formulario.btnListar.dispatchEvent(new Event('input'));
});

formulario.btnListar.addEventListener('click', () => {
    if (criancas.length === 0) return alert('Não há crianças na lista');

    let lista = '';
    criancas.forEach(crianca => {
        const { nomeCrianca, idadeCrianca } = crianca;
        lista += `${nomeCrianca} - ${idadeCrianca} anos\n`;
    });

    resultadoLista.innerText = lista;
});

formulario.btnResumir.addEventListener('click', () => {
    if (criancas.length === 0) return alert('Não há crianças na lista');

    const copiaCriancas = [...criancas];
    copiaCriancas.sort((a, b) => a.idadeCrianca - b.idadeCrianca);

    let resumo = '';
    let aux = copiaCriancas[0].idadeCrianca;

    let nomes = [];

    copiaCriancas.forEach(crianca => {
        const { nomeCrianca, idadeCrianca } = crianca;

        if (idadeCrianca === aux) {
            nomes.push(nomeCrianca);
        } else {
            resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
            resumo += ((nomes.length / copiaCriancas.length) * 100).toFixed(2) + '%\n';
            resumo += '(' + nomes.join(', ') + ')\n\n';

            aux = idadeCrianca;
            nomes = [];
            nomes.push(nomeCrianca);
        }
    });

    resumo += aux + ' ano(s): ' + nomes.length + ' criança(s) - ';
    resumo += ((nomes.length / copiaCriancas.length) * 100).toFixed(2) + '%\n';
    resumo += '(' + nomes.join(', ') + ')\n\n';

    resultadoLista.innerText = resumo;
});
