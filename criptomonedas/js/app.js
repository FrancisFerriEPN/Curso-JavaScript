// https://www.cryptocompare.com/cryptopian/api-keys
// Leer el formulario
// Variables
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
    } else {
        // Todo bien consultar la API
    }    
});

// Funciones