/*
Para formar um triângulo, um dos lados não pode ser maior que a soma dos dois
Equilátero = 03 lados iguais
Isósceles = 02 lados iguais
Escaleno = 03 lados diferentes
*/
const formulario = document.querySelector('form');
const respostaUm = document.querySelector('#respostaUm');
const respostaDois = document.querySelector('#respostaDois');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const ladoA = Number(document.getElementById('inLadoA').value);
    const ladoB = Number(document.getElementById('inLadoB').value);
    const ladoC = Number(document.getElementById('inLadoC').value);

    if (
        ladoA + ladoB > ladoC &&
        ladoA + ladoC > ladoB &&
        ladoB + ladoC > ladoA
    ) {
        respostaUm.innerText = `Lados podem formar um triângulo`;
    } else {
        respostaUm.innerText = `Lados não podem formar um triângulo`;
        return
    }

    let tipoTriangulo;
    if (ladoA === ladoB && ladoC === ladoB) {
        tipoTriangulo = 'Equilátero';
    } else if (ladoA === ladoB || ladoA === ladoC || ladoC === ladoB) {
        tipoTriangulo = 'Isósceles';
    } else {
        tipoTriangulo = 'Escaleno';
    }

    respostaDois.innerText = `Tipo: ${tipoTriangulo}`;
});
