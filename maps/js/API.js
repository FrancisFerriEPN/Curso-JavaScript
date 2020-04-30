class API {
    async obtener_datos(){
        const total = 1000;
        // obtener los datos desde la API
        const url = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`;
        const respuesta = await fetch(url);
        // retornar datyos como json
        const respuesta_json = await respuesta.json();
        return {
            respuesta_json
        }
    }
}