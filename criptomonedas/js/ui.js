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
            // Obtener el select de opciones
            const select_criptomoneda = document.querySelector("#criptomoneda");
            //<<<

            for(const [key , value] of Object.entries(monedas.monedas.Data)) {
                const opcion = document.createElement("option");
                opcion.value = value.Symbol;
                opcion.appendChild(document.createTextNode(value.CoinName));
                select_criptomoneda.appendChild(opcion);
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

    // Imprimir el resultado de la cotizacion
    mostrar_resultado(resultado, moneda, cryptomoneda){

        //<<<
        console.log(resultado[cryptomoneda][moneda]);
        //>>>

    }

}