const apiKey = '235d2d5a6de0c2230119068c'
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

//Função para consulta à taxa de câmbio via API
async function getExchangeRate(daMoeda, paraMoeda) {
    try {
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if (data.result === "success") {
            return data.conversion_rates[paraMoeda];
        } else {
            throw new Error("Erro ao buscar a taxa de câmbio.");
        }
    } catch (error) {
        console.error("Erro:", error);
        return null;
    }
}

document.getElementById('currency-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    //Obter valores de entrada.
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('from-currency').value;
    const paraMoeda = document.getElementById('to-currency').value;

    const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

    if (exchangeRate) {
        const convertedValue = valor * exchangeRate;

        //console.log(convertedValue);

        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado ${convertedValue.toFixed(2)} ${paraMoeda}`;
    } else {
        alert('Erro ao buscar a cotação. Tente novamente');
    }

});