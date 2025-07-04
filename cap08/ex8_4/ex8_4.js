const formulario = document.querySelector('form');
const resposta = document.querySelector('pre');

const itens = [];

formulario.rbPizza.addEventListener('click', () => {
    formulario.inBebida.className = 'oculta';
    formulario.inPizza.className = 'exibe';
});

formulario.rbBebida.addEventListener('click', () => {
    formulario.inPizza.className = 'oculta';
    formulario.inBebida.className = 'exibe';
});

formulario.inDetalhes.addEventListener('focus', () => {
    if (formulario.rbPizza.checked) {
        const pizza = formulario.inPizza.value;
        const num = pizza === 'media' ? 2 : pizza === 'grande' ? 3 : 4;
        formulario.inDetalhes.placeholder = `Até ${num} sabores`;
    } else if (formulario.rbBebida.checked) {
        formulario.inDetalhes.placeholder = 'Descreva a bebida';
    }
});

formulario.inDetalhes.addEventListener('blur', () => {
    formulario.inDetalhes.placeholder = '';
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let produto;
    if (formulario.rbPizza.checked) {
        const num = formulario.inPizza.selectedIndex;
        produto = formulario.inPizza.options[num].text;
    } else {
        const num = formulario.inBebida.selectedIndex;
        produto = formulario.inBebida.options[num].text;
    }
    const detalhes = formulario.inDetalhes.value;
    itens.push(produto + ' (' + detalhes + ')');
    resposta.innerText = itens.join('\n');

    formulario.reset();
    formulario.rbPizza.dispatchEvent(new Event('click'));
});
