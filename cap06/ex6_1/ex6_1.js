const formulario = document.querySelector('form');
const respostaNome = document.querySelector('span');
const respostaLista = document.getElementById('listaPacientes');

const pacientes = [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = formulario.inPaciente.value;
    pacientes.push(nome);

    let lista = '';

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respostaLista.innerText = lista;
    formulario.inPaciente.value = '';
    formulario.inPaciente.focus();
});

formulario.btnUrgencia.addEventListener('click', (event) => {
    event.preventDefault();

    if(!formulario.checkValidity()) {
        alert('Informe o nome do paciente a ser atendido em caráter de urgência.');
        formulario.inPaciente.focus();
        return;
    }

    const nome = formulario.inPaciente.value;
    pacientes.unshift(nome);

    let lista = '';

    pacientes.forEach((paciente, i) => lista += `${i + 1}. ${paciente}\n`);

    respostaLista.innerText = lista;
    formulario.inPaciente.value = '';
    formulario.inPaciente.focus();
});

formulario.btnAtender.addEventListener('click', () => {
    if (pacientes.length === 0) {
        alert('Não há pacientes na fila de espera.');
        formulario.inPaciente.focus();
        return;
    }

    const atenderPaciente = pacientes.shift();
    respostaNome.innerText = atenderPaciente;

    let lista = '';

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    respostaLista.innerText = lista;
});
