class API {
    constructor(api_key) {
        this.api_key = api_key;
    }

    // Obtener todas las monedsa
    async obtener_monedas_API(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.api_key}`;
        // fetch API
        const url_obtener_monedas = await fetch(url);

        // Respuesta en JSON
        const monedas = await url_obtener_monedas.json();
        
        return {
            monedas
        }
    }

    async obtener_valores(moneda, cryptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}&api_key=${this.api_key}`;

        // Consultar en rest API
        const url_convertir = await fetch(url);

        const resultado = await url_convertir.json();
        return{
            resultado
        }
    }
}