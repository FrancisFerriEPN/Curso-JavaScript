import * as UI from "./interfaz.js"
UI.formulario_buscar.addEventListener('submit', (e) => {
    e.preventDefault();

    // Exporta lo que es estatico por que si exportas text bioxes o asi se mandan como estaban inicialemnte

    // Obtener datos del formulraio
    const artista = document.querySelector("#artista").value,
        cancion = document.querySelector("#cancion").value;

    if (!(artista && cancion)){
        // El usuario deja los campos vacios mostrar error
        UI.div_mensajes.innerHTML = 'Error... todos los campos son obligatorios';
        UI.div_mensajes.classList.add('error');
        setTimeout(() => {
            UI.div_mensajes.innerHTML = '';
        UI.div_mensajes.classList.remove('error');
        },3000);
    } else {
        // El formulario esta completo, realizar consulta a la API
        console.log(artista);
        console.log(cancion);
    }

    /* 
    if (artista === "" || cancion === ""){

    } else {

    } */

})