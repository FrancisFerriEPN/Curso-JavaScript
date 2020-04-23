class Interfaz {
    constructor() {
        // Inicializa la APP al instanciar
        this.init();
        // Leer resultado
        this.listado = document.getElementById("resultado-eventos");
    }

    //metodo para cuando inicialice
    init(){
        this.imprimir_categorias();
    }

    // Imprmir categorias
    imprimir_categorias(){
        const lista_categorias = eventBrite.obtener_categorias()
            .then(categorias =>{
                const cast = categorias.categorias.categories;
                // Seleccionar el select de categorias
                const select_categoria = document.getElementById("listado-categorias");
                cast.forEach(categoria => {
                    const option = document.createElement("option");
                    option.value = categoria.id;
                    option.appendChild(document.createTextNode(categoria.name_localized));
                    select_categoria.appendChild(option);
                });
            })
    }
}