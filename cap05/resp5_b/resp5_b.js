const formulario = document.querySelector('form');
const outResultado = document.getElementById('resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const numeroInicialChinchilas = Number(formulario.numeroChinchilas.value);
    const numeroAnos = Number(formulario.numeroAnos.value);
    let resultado = '';
    let chinchilas = numeroInicialChinchilas;

    if (chinchilas < 2) return outResultado.innerText = `Digite um número maior ou igual ao número 2`;

    for (let i = 1; i <= numeroAnos; i++) {
        resultado += `${i}º Ano: ${chinchilas} Chinchilas\n`;
        chinchilas *= 3;
    }

    outResultado.innerText = `${resultado}`;
});
