const formulario = document.querySelector('form');
const grupoConvenio = document.getElementById('grupoConvenio');
const radioSim = document.getElementById('sim');
const radioNao = document.getElementById('nao');
const resultado = document.getElementById('resultadoPagar');

const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
}

const exibirResultado = (desconto, valorFinal) => {
    const descontoFormatado = formatarValor(desconto);
    const valorFinalFormatado = formatarValor(valorFinal);

    resultado.innerHTML = `
    Desconto R$: ${descontoFormatado}<br>
    Valor R$: ${valorFinalFormatado}
  `;
};

const calcularDesconto = (valor, taxa) => valor * taxa;

const obterValorVacina = () => {
    const valor = Number(formulario.valorVacina.value);
    if (isNaN(valor) || valor <= 0) return null;
    return valor;
};

const obterTaxaDesconto = () => {
    if (radioSim.checked) {
        const convenio = formulario.listaConvenio.value;
        return convenio === 'amigoAnimais' ? 0.2 : 0.5;
    }
    return 0.1;
};

const processarFormulario = event => {
    event.preventDefault();

    const valorVacina = obterValorVacina();
    if (valorVacina === null) {
        resultado.innerText = 'Por favor, insira um valor válido para vacina.';
        return;
    }

    const taxaDesconto = obterTaxaDesconto();
    const desconto = calcularDesconto(valorVacina, taxaDesconto);
    const valorFinal = valorVacina - desconto;

    exibirResultado(desconto, valorFinal);
};

const atualizarGrupoConvenio = () => {
    if (radioSim.checked) {
        grupoConvenio.classList.remove('oculta');
    } else {
        grupoConvenio.classList.add('oculta');
    }
};

formulario.addEventListener('submit', processarFormulario);
radioSim.addEventListener('change', atualizarGrupoConvenio);
radioNao.addEventListener('change', atualizarGrupoConvenio);
document.addEventListener('DOMContentLoaded', atualizarGrupoConvenio);
