// https://www.eventbrite.com.ar/account-settings/apps

class EventBrite {
    constructor() {
        this.token_personal = 'ATH3MWXNFVTO3MGL3TCI';
        this.ordenar = 'date';
    }
    
    // Obtiene las categrias en init()
    async obtener_categorias(){
        // Consultar las categorias a la rest API de EventBrite
        const respuesta = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_personal}`);

        // esperar la resuesta de las categorias y devolver un JSON
        const categorias = await respuesta.json();

        return{
            categorias
        }
    }
}