const formulario = document.querySelector('form');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const frase = formulario.frase.value;

    const fraseMaiuscula = frase.toUpperCase();
    const fraseSemEspacos = fraseMaiuscula.replace(/ /g, '');
    const fraseInvertida = fraseSemEspacos.split('').reverse().join('');

    if (fraseSemEspacos === fraseInvertida) {
        resultado.textContent = `${fraseMaiuscula} é um Palíndromo`;
    } else {
        resultado.textContent = `${fraseMaiuscula} não é um Palíndromo`;
    }
});
