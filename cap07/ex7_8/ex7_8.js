const formulario = document.querySelector('form');

const taxaMulta = 2 / 100;
const taxaJuros = 0.33 / 100;

formulario.addEventListener('submit', event => {
    event.preventDefault();

    const dataVencimento = formulario.data.value;
    const valor = Number(formulario.conta.value);
    const hoje = new Date();
    const vencimento = new Date();

    const partes = dataVencimento.split('-');
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1]) - 1);
    vencimento.setFullYear(Number(partes[0]));

    const atraso = hoje - vencimento;
    let multa = 0;
    let juros = 0;

    if (atraso > 0) {
        const dias = atraso / 86400000;
        multa = valor * taxaMulta;
        juros = valor * taxaJuros * dias;
    }

    const total = valor + multa + juros;

    formulario.multa.value = multa.toFixed(2);
    formulario.juros.value = juros.toFixed(2);
    formulario.total.value = total.toFixed(2);
});
