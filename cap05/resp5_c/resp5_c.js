const formulario = document.querySelector('form');
const primeiroResultado = document.getElementById('primeiroResultado');
const segundoResultado = document.getElementById('segundoResultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const numero = Number(formulario.inNumero.value);

    if (numero < 2 || isNaN(numero)) {
        primeiroResultado.innerText = `Por favor, digite um número maior ou igual a 2`;
        segundoResultado.innerText = '';
        return;
    }

    let divisores = `Divisores do ${numero}: 1`;
    let soma = 1;

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            divisores += ', ' + i;
            soma += i;
        }
    }

    divisores += ` (Soma: ${soma})`;
    primeiroResultado.innerText = divisores;

    if (soma === numero) {
        segundoResultado.innerText = `${numero} É um Número Perfeito`;
    } else {
        segundoResultado.innerText  = `${numero} Não é um Número Perfeito`;
    }
});
