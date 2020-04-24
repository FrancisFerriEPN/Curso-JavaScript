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

    // Lee la resuesta de la API e imprime los resultados
    mostrar_eventos(eventos){
        // LEer los eventos y agregarlos a una variable
        const lista_eventos = eventos.events;

        // recrrer los eventos y 
        lista_eventos.forEach(evento => {
            this.listado.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                            <img class="img-fluid mb-2 src="${evento.logo !== null ? evento.logo.url :""}">
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Informacion del ecento</p>
                                <p>${evento.description.text.substring(0,280)}...</p>
                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y Hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

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

    // Limpiar resultados previos
    limpiar_resultados(){
        this.listado.innerHTML="";
    }

    // Desaparece el mensaje en caso de que exita
    limpiar_mensaje(){
        const alert = document.querySelector('.alert');
        if (alert){
            alert.remove();
        }
    }
}