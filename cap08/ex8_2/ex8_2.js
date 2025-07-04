const formulario = document.querySelector('form');
const respostaUm = document.getElementById('respostaUm');
const respostaDois = document.getElementById('respostaDois');
const respostaTres = document.getElementById('respostaTres');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const modeloVeiculo = formulario.modeloVeiculo.value;
    const anoVeiculo = Number(formulario.anoVeiculo.value);
    const valorVeiculo = Number(formulario.valorVeiculo.value);
    const classificacao = classificarVeiculo(anoVeiculo);
    const entrada = calcularEntrada(valorVeiculo, classificacao);
    const parcela = (valorVeiculo - entrada) / 10;

    respostaUm.innerText = modeloVeiculo + " - " + classificacao;
    respostaDois.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
    respostaTres.innerText = `+10x de R$: ${parcela.toFixed(2)}`;
});

const classificarVeiculo = (anoVeiculo) => {
    const anoAtual = new Date().getFullYear();
    let classificar;

    if (anoVeiculo === anoAtual) {
        classificar = 'Novo';
    } else if (anoVeiculo === anoAtual -1 || anoVeiculo === anoAtual - 2) {
        classificar = 'Seminovo';
    } else {
        classificar = 'Usado';
    }

    return classificar;
}

const calcularEntrada = (valorVeiculo, status) => status === 'Novo' ? valorVeiculo * 0.5 : valorVeiculo * 0.3;
