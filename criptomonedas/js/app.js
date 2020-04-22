// https://www.cryptocompare.com/cryptopian/api-keys
// https://tobiasahlin.com/spinkit/

// Leer el formulario
// Variables

//<<<
// Primero cotizador antes que UI
const cotizador = new API('14aa286e9a8621569221494da76d21c1172535f0fc3e790038bffe9f01c2cd0a');
const ui = new Interfaz();

//>>>

const formulario = document.querySelector("#formulario");
const moneda = document.getElementById("moneda");
const criptomoneda = document.getElementById("criptomoneda");


// Listeners
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    //<<<

    moneda_seleccionada = moneda.options[moneda.selectedIndex].value;
    // TAMBIEN FUNCIONA
        //moneda.value 
    //>>>

    // leer la criptomoneda
    criptomoneda_seleccionada = criptomoneda.options[criptomoneda.selectedIndex].value;
    // Comprobar que ambos campos tengas algo seleccionado
    if(moneda_seleccionada === "" || criptomoneda_seleccionada === ""){
        // Arrojar una alerta de error
        ui.mostrar_mensaje("Ambos campos son obligatorios", "alert bg-danger text-center");
    } else {
        // Todo bien consultar la API
        cotizador.obtener_valores(moneda_seleccionada, criptomoneda_seleccionada)
        .then( data => {
            ui.mostrar_resultado(data.resultado.RAW, moneda_seleccionada, criptomoneda_seleccionada);
        })
    }    
});

// Funciones