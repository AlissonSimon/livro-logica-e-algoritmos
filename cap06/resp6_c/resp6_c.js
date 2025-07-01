const formulario = document.querySelector('form');
const resultadoConcurso = document.getElementById('resultadoConcurso');

const resultadosParticipantes = [];

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const candidato = formulario.inCandidato.value.trim();
    const acertos = Number(formulario.inAcertos.value);

    if (!candidato) { return alert('Por favor, insira o nome do candidato.'); }
    if (formulario.inAcertos.value === '' || isNaN(acertos)) {
        return alert('Por favor, nos informe o número de acertos do candidato');
    }
    resultadosParticipantes.push({ candidato, acertos });

    formulario.inCandidato.value = '';
    formulario.inAcertos.value = '';
    formulario.inCandidato.focus();

    formulario.btnListarTodos.dispatchEvent(new Event('click'));
});

formulario.btnListarTodos.addEventListener('click', () => {
   const lista = resultadosParticipantes
       .map(({ candidato, acertos}) => `${candidato} - ${acertos}`)
       .join('\n');

   resultadoConcurso.innerText = lista;
});

formulario.btnAprovados.addEventListener('click', () => {
   const acertosAprovacao = Number(prompt('Número de acertos para aprovação?'));
   if (!acertosAprovacao && acertosAprovacao !== 0) { return alert('Por favor, informe o número de acertos.'); }

   const aprovados = resultadosParticipantes
       .filter(({ acertos }) => acertos >= acertosAprovacao)
       .sort((a, b) => b.acertos - a.acertos);

   if (aprovados.length === 0) {
       resultadoConcurso.innerText = 'Nenhum candidato aprovado na 2ª fase';
       return;
   }

   const listaAprovados = aprovados
       .map(({ candidato, acertos }) => `${candidato} - ${acertos}`)
       .join('\n');

   resultadoConcurso.innerText = listaAprovados;
});
