const formulario = document.querySelector('form');
const resultadoOrdemNumeros = document.getElementById('resultadoOrdemNumeros');
const avisoOrdemNumeros = document.getElementById('avisoOrdemNumeros');

const numeros = [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const numero = Number(formulario.inNumero.value);
    if (numeros.includes(numero)) { return alert('Esse número já foi incluso na lista!'); }
    numeros.push(numero);

    let lista = `Número(s): ${numeros.join(', ')}`;
    resultadoOrdemNumeros.innerText = lista;

    formulario.inNumero.value = '';
    formulario.inNumero.focus();
});

formulario.btnVerificarOrdem.addEventListener('click', () => {
    if (numeros.length === 0) { return alert('Sua lista está vazia, por favor inclua um número.'); }

    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            avisoOrdemNumeros.classList.remove('green');
            avisoOrdemNumeros.classList.add('vermelho');
            avisoOrdemNumeros.innerText = 'Atenção... Seus números não estão em ordem crescente.';
            return;
        }
    }

    avisoOrdemNumeros.classList.remove('vermelho');
    avisoOrdemNumeros.classList.add('verde');
    avisoOrdemNumeros.innerText = 'Boa! Seus números estão em ordem crescente.';
})
