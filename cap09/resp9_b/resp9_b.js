const formulario = document.querySelector('form');
const listaProdutos = document.querySelector('pre');

const produtos = [];

const carregarProdutos = () => {
    const dados = localStorage.getItem('produtos');
    if (dados) {
        produtos.push(...JSON.parse(dados));
        atualizarLista();
    }
}

const declararProdutos = () => {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

const validarProduto = (produto) => {
    if (!produto || produto.trim().length < 3) {
        alert('Por favor, informe um produto válido.');
        formulario.produto.value = '';
        return false;
    }
    return true;
}

const atualizarLista = () => {
    produtos.sort();

    let lista = 'Produtos Adicionados\n------------------\n';

    produtos.forEach((produto, index) => {
        lista += `${index + 1}. ${produto}\n`;
    });

    listaProdutos.innerText = lista;
    formulario.produto.value = '';
}

const adicionarProduto = (event) => {
    event.preventDefault();

    const produto = formulario.produto.value;
    if (!validarProduto(produto)) { return; }

    produtos.push(produto);
    atualizarLista();
    declararProdutos();
}

const limparLista = () => {
    produtos.length = 0;
    listaProdutos.innerText = '';
    localStorage.removeItem('produtos');
}

window.addEventListener('load', carregarProdutos);
formulario.addEventListener('submit', adicionarProduto);
formulario.btnLimpar.addEventListener('click', limparLista);