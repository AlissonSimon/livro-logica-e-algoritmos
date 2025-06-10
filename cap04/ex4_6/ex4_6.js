const formulario = document.querySelector('form');
const respostaUm = document.querySelector('#outRespostaUm');
const respostaDois = document.querySelector('#outRespostaDois');
const respostaTres = document.querySelector('#outRespostaTres');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const saque = Number(formulario.inValorDoSaque.value);

    if (saque % 10 != 0) {
        alert('Valor inválido para as notas disponíveis: (R$ 10, 50, 100)');
        formulario.inSaque.focus();
        return;
    }

    /*
    680 / 100 = 6
    680 % 100 = 80

    80 / 50 = 1
    80 % 50 = 30

    30 / 10 = 3
    */
    const notasCem = Math.floor(saque / 100);
    let resto = saque % 100;

    const notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;

    const notasDez = Math.floor(resto / 10);

    if (notasCem > 0) { respostaUm.innerText = `Notas de R$ 100: ${notasCem}` }
    if (notasCinquenta > 0) { respostaDois.innerText = `Notas de R$ 50: ${notasCinquenta}` }
    if (notasDez > 0) { respostaTres.innerText = `Notas de R$ 10: ${notasDez}` }
});
