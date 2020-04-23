class Interfaz {
    constructor() {
        // Inicializa la APP al instanciar
        this.init();
        // Leer resultado
        this.listado = document.getElementById("resultado-eventos");
    }

    //metodo para cuando inicialice
    init(){

    }

    // Imprmir categorias
    imprimir_categorias(){
        const lista_categorias = eventBrite.obtener_categorias();
    }
}