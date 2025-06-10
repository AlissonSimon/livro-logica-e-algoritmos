const formulario = document.querySelector('form');
const respostaUm = document.querySelector('h3');
const respostaDois = document.querySelector('h4');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = formulario.nome.value;
    const notaUm = Number(formulario.inNotaUm.value);
    const notaDois = Number(formulario.inNotaDois.value);
    const media = (notaUm + notaDois) / 2;

    respostaUm.innerText = `Média das notas: ${media}`;

    if (media > 7) {
        respostaDois.innerText = `Parabéns ${nome}! Você foi aprovado!`;
        respostaDois.style.color = 'blue';
    } else if (media >= 4) {
        respostaDois.innerText = `Atenção ${nome}! Você está de provão.`
        respostaDois.style.color = 'green';
    } else {
        respostaDois.innerText = `Ops ${nome}... Você foi reprovado!`;
        respostaDois.style.color = 'red';
    }
});
