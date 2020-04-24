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

    // Metodo para impimir mensajes
    mostrar_mensaje(mensaje,clases){
        this.limpiar_mensaje();
        const div = document.createElement("div");
        div.classList = clases;
        // Agregar texto
        div.appendChild(document.createTextNode(mensaje));
        // Buscar adre
        const buscador_div = document.querySelector("#buscador");
        
        buscador_div.appendChild(div);
        // quitar el alert despues de tres segundos
        setTimeout(() => {
            this.limpiar_mensaje();
        },3000);
    }

    // Desaparece el mensaje en caso de que exita
    limpiar_mensaje(){
        const alert = document.querySelector('.alert');
        if (alert){
            alert.remove();
        }
    }
}