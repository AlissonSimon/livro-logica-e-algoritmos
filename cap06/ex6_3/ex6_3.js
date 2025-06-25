const formulario = document.querySelector('form');
const resultadoLista = document.getElementById('lista');

const carros = [];

formulario.addEventListener('submit',  (event) => {
    event.preventDefault();

    const modeloCarro = formulario.inModelo.value;
    const precoCarro = Number(formulario.inPreco.value);

    carros.push({ modeloCarro, precoCarro });

    formulario.inPreco.value = '';
    formulario.inModelo.value = '';

    formulario.inModelo.focus();
    formulario.btnListar.dispatchEvent(new Event('click'));
});

formulario.btnListar.addEventListener('click',  () => {
    if (carros.length === 0) { return alert('Não há carros na lista.'); }

    const lista = carros
        .map(carro => `${carro.modeloCarro} - R$: ${carro.precoCarro.toFixed(2).replace('.', ',')}`)
        .join('\n');

    resultadoLista.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
});

formulario.btnFiltrar.addEventListener('click',  () => {
    const valorMaximo = Number(prompt('Qual valor o cliente deseja pagar? '));
    if (valorMaximo === 0 || isNaN(valorMaximo)) { return; }

    const carrosFiltrados = carros.filter(carro => carro.precoCarro <= valorMaximo);
    if (carrosFiltrados.length === 0) { return alert('Não há carros listados com o preço informado'); }

    let lista = '';
    carrosFiltrados.forEach(carro => {
        lista += `${carro.modeloCarro} - R$: ${carro.precoCarro.toFixed(2)}\n`;
    });

    resultadoLista.innerText = `Carros até R$: ${valorMaximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});

formulario.btnSimularPromo.addEventListener('click',  () => {
    const desconto = Number(prompt('Qual o percentual de desconto: '));
    if (desconto === 0 || isNaN(desconto)) { return; }

    const carrosDesconto = carros.map(aux => ({
        modelo: aux.modeloCarro,
        preco: aux.precoCarro - (aux.precoCarro * desconto / 100)
    }));

    let lista = '';
    carrosDesconto.forEach(carro => {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2).replace('.', ',')}\n`;
    });

    resultadoLista.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
});
