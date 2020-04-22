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
        // En caso de un resultado anterior ocultarlo
        const resultado_anterior = document.querySelector('#resultado > div');
        if(resultado_anterior){
            resultado_anterior.remove();
        }
        //>>>

        //<<<
        const datos_conversion = resultado[cryptomoneda][moneda];
        //>>>


        // recortar digitos de precio
        let precio = datos_conversion.PRICE.toFixed(2),
            porcentaje = datos_conversion.CHANGEPCTDAY.toFixed(2),
            

            //<<<
            actualizado = new Date(datos_conversion.LASTUPDATE * 1000).toLocaleDateString('es-Mx');
            //>>>


        // construir el template
        let template_HTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datos_conversion.FROMSYMBOL} a moneda ${datos_conversion.TOSYMBOL} es de: $${precio}</p>
                    <p>Variacion ultimo dia % ${porcentaje}</p>
                    <p>Ultima actualizacion: ${actualizado}</p>
                </div>
            </div>
        `;
        this.mostrar_spinner("block");
        // Insertar el resultado
        setTimeout( () =>{
            this.mostrar_spinner("none");
            document.querySelector('#resultado').innerHTML = template_HTML;
        },3000);
        
    }

    // Mostrar un spiner de carga al enviar la cotizacion
    mostrar_spinner(vista){
        const spinner = document.querySelector(".contenido-spinner");
        spinner.style.display = vista;
    }
}