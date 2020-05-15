let DB;
// Selectores de la interfaz
const form = document.querySelector("form"),
    nombre_mascota = document.querySelector("#mascota"),
    nombre_cliente = document.querySelector("#cliente"),
    telefono = document.querySelector("#telefono"),
    fecha = document.querySelector("#fecha"),
    hora = document.querySelector("#hora"),
    sintomas = document.querySelector("#sintomas"),
    citas = document.querySelector("#citas"),
    heading_administra = document.querySelector("#administra");

    // Esperar or el DOM ready
    document.addEventListener("DOMContentLoaded", () => {

        //<<<
        let crear_DB = window.indexedDB.open("citas", 1);

        // Si hay un errror enviasrlo a la consoiola
        crear_DB.onerror =function() {
            console.log("Hubo un error");
        }

        // Si todo eta bine mostratr en consola
        crear_DB.onsuccess = function () {
            console.log("Todo listo!");
            // Asignar a la base de datos
            DB = crear_DB.result;
            console.log(DB);
        }
        //>>>
        
    });