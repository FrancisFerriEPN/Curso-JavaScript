class Interfaz{

    constructor(){
        this.init();
    }

    init(){
        this.construir_select();
    }
    construir_select(){
        cotizador.obtener_monedas_API()
        .then(monedas =>{
            
            //<<<

            for(const [key , value] of Object.entries(monedas.monedas.Data)) {
                console.log(value);
            }

            //>>>

        })
    }

    mostrar_mensaje(mensaje, clases){
        const div = document.createElement("div");
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        // Seleccionar mensajes
        const div_mensajes = document.querySelector(".mensajes");
        div_mensajes.appendChild(div);
        console.log(div);
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        },3000);
    }
}