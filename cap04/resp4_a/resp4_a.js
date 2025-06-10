/*
Elaborar um programa que informa se um número é par ou impar com if else e após com operador ternário
*/
const formulario = document.querySelector('form');
const respostaNumero = document.querySelector('div');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

   const numero = Number(formulario.inNumero.value);

   // if (numero % 2 === 0) {
   //     respostaNumero.innerText = `${numero} é par`;
   // } else {
   //     respostaNumero.innerText = `${numero} é ímpar`;
   // }
   respostaNumero.innerText = `${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}`;
});
