// https://leafletjs.com/download.html
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
   ui.mostrar_establecimientos();  
});

// Habilitar busqueda de establecimientos
const buscador =document.querySelector("#buscar input");


//<<<
buscador.addEventListener("input", () => {
   if(buscador.value.length > 5){
        // Buscar en la API
        ui.obtener_sugerencias(buscador.value);
   }
});

//>>>