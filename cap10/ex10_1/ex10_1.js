const formulario = document.querySelector('form');
const dvQuadro = document.getElementById('dvQuadro');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const tarefa = formulario.tarefa.value;

    const h5 = document.createElement('h5');
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    dvQuadro.appendChild(h5);

    formulario.tarefa.value = '';
    formulario.tarefa.focus();
});

formulario.btnSelecionar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5');

    if (tarefas.length === 0) {
        alert('Não há tarefas para selecionar');
        return;
    }

    let aux = -1;

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].className === 'tarefa-selecionada') {
            tarefas[i].className = 'tarefa-normal';
            aux = i;
            break;
        }
    }

    if (aux === tarefas.length - 1) {
        aux = -1;
    }

    tarefas[aux + 1].className = 'tarefa-selecionada';
});

formulario.btnRetirar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5');

    let aux = -1;

    tarefas.forEach((tarefa, i) => {
        if (tarefa.className === 'tarefa-selecionada') {
            aux = i;
        }
    });

    if (aux === -1) {
        alert('Selecione uma tarefa para removê-la');
        return;
    }

    if (confirm(`Confirma Exclusão de '${tarefas[aux].innerText}'?`)) {
        dvQuadro.removeChild(tarefas[aux]);
    }
});

formulario.btnGravar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5');

    if (tarefas.length === 0) {
        alert('Não há tarefas para serem salvas');
        return;
    }

    let dados = '';
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ';';
    });

    localStorage.setItem('tarefasDia', dados.slice(0, -1));

    if (localStorage.getItem('tarefaDia')) {
        alert('Ok! Tarefas salvas.');
    }
});

window.addEventListener('load', () => {
    if (localStorage.getItem('tarefasDia')) {
        const dados = localStorage.getItem('tarefasDia').split(';');

        dados.forEach(dado => {
           const h5 = document.createElement('h5');
           const texto = document.createTextNode(dado);
           h5.appendChild(texto);
           dvQuadro.appendChild(h5);
        });
    }
});