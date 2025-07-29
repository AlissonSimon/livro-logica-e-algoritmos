const formulario = document.querySelector('form');
const exibirClubes = document.querySelector('h5');
const tabela = document.querySelector('table');

const clubes = [];

const validarClube = (clube) => {
    if (!clube) {
        alert('Informe o nome do clube.');
        return false;
    }
    return true;
}

const exibirClube = (arr) => arr.join('\n');

const validarExibirArray = (arr) => {
    if (arr.length % 2 !== 0) {
        alert('Informe uma quantidade par de clubes.');
        return false;
    }
    return true;
}

const criarTabela = (arr) => {
    const tbody = document.createElement('tbody');

    for (let i = 0; i < arr.length; i += 2) {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = arr[i];
        tr.appendChild(td1);

        if (arr[i + 1] !== undefined) {
            const td2 = document.createElement('td');
            td2.textContent = arr[i + 1];
            tr.appendChild(td2);
        }

        tbody.appendChild(tr);
    }

    tabela.appendChild(tbody);
}

const carregarClubes = () => {
    const dados = localStorage.getItem('clubes');
    if (dados) {
        clubes.push(...JSON.parse(dados));
        exibirClubes.innerText = exibirClube(clubes);
        exibirTabela();
    }
}

const adicionarClube = (event) => {
    event.preventDefault();

    const clube = formulario.clube.value.trim();
    if (!validarClube(clube)) { return; }
    clubes.push(clube);

    localStorage.setItem('clubes', JSON.stringify(clubes));

    exibirClubes.innerText = exibirClube(clubes);
    formulario.reset();
    formulario.focus();
}

const exibirTabela = () => {
    tabela.innerHTML = '';

    if (!validarExibirArray(clubes)) { return; }

    criarTabela(clubes);
}

const novosClubes = () => {
    exibirClubes.innerText = '';
    tabela.innerHTML = '';
    localStorage.removeItem('clubes');
}

window.addEventListener('DOMContentLoaded', carregarClubes)

formulario.addEventListener('submit', adicionarClube);
formulario.btnMontarTabela.addEventListener('click', exibirTabela);
formulario.btnNovosClubes.addEventListener('click', novosClubes);
