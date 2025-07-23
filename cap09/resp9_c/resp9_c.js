const formulario = document.querySelector('form');
const numeroServicos = document.querySelector('span');
const descricaoServico = document.querySelector('pre');

const servicos = [];

const carregarServicos = () => {
    const dados = localStorage.getItem('servicos');
    if (dados) {
        servicos.push(...JSON.parse(dados));
        numeroServicos.innerText = String(contarServicos());
    }
}

const declararServicos = () => localStorage.setItem('servicos', JSON.stringify(servicos));

const contarServicos = () => servicos.length;

const validarServico = (servico) => {
    if (!servico) {
        alert('Por favor, informe o tipo de serviço e o veículo.');
        formulario.reset();
        return false;
    }
    return true;
}

const executarServico = () => {
    const servicoAndamento = servicos.shift();

    if (!servicoAndamento) {
        alert('Todos os serviços foram concluídos!');
        descricaoServico.innerText = '';
        localStorage.removeItem('servicos');
        numeroServicos.innerText = String(0);
        return;
    }

    numeroServicos.innerText = String(contarServicos());
    descricaoServico.innerText = servicoAndamento;
    declararServicos();
}

const adicionarServico = (event) => {
    event.preventDefault();

    const servico = formulario.servico.value.trim();
    if (!validarServico(servico)) { return; }

    servicos.push(servico);
    formulario.reset();
    numeroServicos.innerText = String(contarServicos());
    declararServicos();
}

window.addEventListener('load', carregarServicos);
formulario.addEventListener('submit', adicionarServico);
formulario.btnExecutar.addEventListener('click', executarServico);