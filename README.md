# Conversor de Moedas 2.0 com API

## Começando 🚀
Neste projeto, foi criado um Conversor de Moedas Versão 2.0 com integração de API na seguinte matéria:
* Programação Web I.

## Sobre o projeto 📋
Este projeto é um Conversor de Moedas que facilita o cálculo de valores convertidos em tempo real entre diferentes moedas. Diferente da versão anterior, esta aplicação integra uma API de câmbio, permitindo consultas de taxa de conversão sempre atualizadas e precisas, refletindo as variações do mercado.

## Código JavaScript para o Conversor de Moedas
* **`apiKey`**: Chave exclusiva que autentica a aplicação na API de câmbio, permitindo acesso a taxas de conversão em tempo real.
* **`apiURL`**: URL base da API para obtenção de taxas de câmbio, complementada com o código da moeda que será consultada.

### Função `getExchangeRate(daMoeda, paraMoeda)`
A função `getExchangeRate` é assíncrona e realiza uma chamada à API para obter a taxa de câmbio entre duas moedas.

1. **Parâmetros da função**:
   * `daMoeda`: Código da moeda de origem (ex.: "USD" para dólares americanos).
   * `paraMoeda`: Código da moeda para a qual o valor será convertido (ex.: "BRL" para reais brasileiros).

2. **Bloco `try`**:
   * **`fetch`**: Faz uma requisição para a API com o código da moeda de origem, recebendo uma `Promise` com os dados JSON.
   * **`response.json()`**: Transforma a resposta da API em um objeto JSON.
   * **Verificação de Sucesso**: Verifica se o campo `result` no JSON é `"success"`. Caso contrário, lança um erro.
   * **Retorno da Taxa**: Se a chamada for bem-sucedida, retorna a taxa de conversão entre as moedas especificadas.

3. **Bloco `catch`**:
   * Captura e exibe no console qualquer erro ocorrido durante a requisição, como falhas de rede ou erros da API.
   * Em caso de erro, retorna `null` para indicar que a conversão não foi possível.

## Técnicas e Tecnologias utilizadas 🔨
* Visual Studio Code
* Git Bash
* GitHub
* HTML5
* CSS3
* JavaScript (Puro)
* Live Server (A extensão Live Server permite criar um servidor local através do VSCode, facilitando o desenvolvimento sem a necessidade de atualizar manualmente o navegador a cada alteração no código)


## Autores ✍🏻
| [<img loading="eu.jpeg" src="eu.jpeg" width=115><br><sub>Larissa Gabrielle Fagundes Andrade.</sub>](https://github.com/gabriellefagundes) |
| :---: 
## Meu LinkedIn:
|  [<img loading="linkedin.png" src="linkedin.png" width=115><br><sub>LinkedIn.</sub>](https://www.linkedin.com/in/larissa-gabrielle-a74a272b3/)
| :---: 