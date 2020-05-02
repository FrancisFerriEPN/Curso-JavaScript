import {API} from "./api.js";
import * as UI from "./interfaz.js";
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
        const api = new API(artista, cancion);
        api.consultar_API()
        .then(data => {
            if (data.respuesta.lyrics){
                // La cancion existe
                const letra = data.respuesta.lyrics;
                console.log(letra);
                UI.div_resultado.textContent= letra;
            } else {
                // La cancion no existe
                UI.div_mensajes.innerHTML = 'La cancion no existe, prueba con otra busqueda';
                UI.div_mensajes.classList.add('error');
                setTimeout(() => {
                    UI.div_mensajes.innerHTML = '';
                    UI.div_mensajes.classList.remove('error');
                    UI.formulario_buscar.reset();
                },3000);
            }
            });
    }

    /* 
    if (artista === "" || cancion === ""){

    } else {

    } */

})