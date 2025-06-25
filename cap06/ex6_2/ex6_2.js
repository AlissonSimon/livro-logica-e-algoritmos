const formulario = document.querySelector('form');
const respErros = document.getElementById('outErros');
const respChances = document.getElementById('outChances');
const respDica = document.getElementById('outDica');

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const numero = Number(formulario.inNumero.value);

    if (numero === sorteado) {
        respDica.innerText = `Parabéns!! Número Sorteado: ${sorteado}`;
        formulario.btnApostar.disabled = true;
        formulario.btnNovo.className = 'exibe';
    } else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o número ${numero}. Tente outro...`);
        } else {
            erros.push(numero);
            const numErros = erros.length;
            const numChances = chances - numErros;

            respErros.innerText = `${numErros} (${erros.join(', ')})`;
            respChances.innerText = `${numChances}`;

            if (numChances === 0) {
                alert('Suas chances acabaram...');
                formulario.btnApostar.disabled = true;
                formulario.btnNovo.className = 'exibe';
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`;
            } else {
                const dica = numero < sorteado ? 'maior' : 'menor';
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
            }
        }
    }

    formulario.inNumero.value = '';
    formulario.inNumero.focus();
});

formulario.btnNovo.addEventListener('click', () => {
   location.reload();
});
