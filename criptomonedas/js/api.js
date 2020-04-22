class API {
    constructor(api_key) {
        this.api_key = api_key;
    }

    // Obtener todas las monedsa
    async obtener_monedas_API(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?pi_key=${this.api_key}`;
        // fetch API
        const url_obtener_monedas = await fetch(url);

        // Respuesta en JSON
        const monedas = await url_obtener_monedas.json();
        
        return {
            monedas
        }

    }
}