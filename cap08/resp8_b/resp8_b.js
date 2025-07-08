const formulario = document.querySelector('form');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const nome = formulario.nomeAluno.value;

    if (!validarNome(nome)) {
        resultado.innerText = 'Por favor, digite o nome completo do aluno';
        return
    }

    const sobrenome = obterSobrenome(nome);
    const totalVogais = contarVogais(nome);
    const senha = sobrenome + totalVogais;

    resultado.innerText = `Senha inicial do aluno: ${senha}`;
});

function validarNome(nome) {
    if (typeof nome !== 'string') { return false; }

    const partes = nome.trim().split(' ');
    return partes.length >= 2;
}

function obterSobrenome(nome) {
    const partes = nome.trim().split(' ');
    return partes[partes.length - 1].toLowerCase();
}

function contarVogais(nome) {
    const vogais = nome.match(/[aeiouáéíóúãõâêîôûàèìòù]/gi);
    const quantidade = vogais ? vogais.length : 0;
    return quantidade.toString().padStart(2, '0');
}
