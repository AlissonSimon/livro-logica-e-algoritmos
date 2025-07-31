const tbPalavras = document.querySelector('table');
const ckMostrar = document.querySelector("input[type='checkbox']");

const montarTabela = () => {
    if (localStorage.getItem("jogoPalavras")) {
        const palavras = localStorage.getItem("jogoPalavras").split(';');
        const dicas = localStorage.getItem("jogoDicas").split(';');

        for (let i = 0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1);

            const col1 = linha.insertCell(0);
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);

            col1.innerText = palavras[i];
            col2.innerText = dicas[i];
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
        }
    }
};

ckMostrar.addEventListener('change', () => {
    ckMostrar.checked ? montarTabela() : window.location.reload();
});

tbPalavras.addEventListener('click', (event) => {
    if (event.target.classList.contains('exclui')) {
        const palavra = event.target.parentElement.parentElement.children[0].innerText;

        if (confirm(`Confirma Exclusão da Palavra: ${palavra}?`)) {
            event.target.parentElement.parentElement.remove();

            localStorage.removeItem("jogoPalavras");
            localStorage.removeItem("jogoDicas");

            const palavras = [];
            const dicas = [];

            for (let i = 1; i < tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText);
                dicas.push(tbPalavras.rows[i].cells[1].innerText);
            }

            localStorage.setItem('jogoPalavras', palavras.join(';'));
            localStorage.setItem('jogoDicas', dicas.join(';'));
        }
    }
});
