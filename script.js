const apiKey = '235d2d5a6de0c2230119068c'
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

//Função para consulta à taxa de câmbio via API
async function getExchangeRate(daMoeda, paraMoeda){
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = response.json();

        if(data.result === "succsess"){
            return data.conversion_rates[paraMoeda];
        }else{
            throw new Error('Erro ao buscar a taxa de câmbio.');
        }
    }catch(error){
        console.error("Erro:", error);
        return null;
    }
}