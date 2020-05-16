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
        }

        // Este metdo solo corre una vez y es ideal para correr el Schema
        crear_DB.onupgradeneeded = function (e) {
            // El evento es la misma base de datos
            let db = e.target.result;
            
            
            // definir el object store, toma dos parametos el nombre de la base de datos y segundo las opciones

            // Esta funcion no se autocompleta
            let object_store = db.createObjectStore('citas',{
                // KeyPath es el indice de la base de datos
                keyPath: 'key',
                autoIncrement: true
            });

            // Crear los indicess y campos de la base de datos, createIndex: 3 parametros (nombre, keyPath, opciones)
            object_store.createIndex("mascota", "mascota", {
                unique: false,

            });
            object_store.createIndex("cliente", "cliente", {
                unique: false,

            });
            object_store.createIndex("telefono", "telefono", {
                unique: false,

            });
            object_store.createIndex("fecha", "fecha", {
                unique: false,

            });
            object_store.createIndex("hora", "hora", {
                unique: false,

            });
            object_store.createIndex("sintomas", "sintomas", {
                unique: false,

            });
            console.log("La base de datos esta lista");
        }
        //>>>
        
        // Cuando el formulario se envia
        form.addEventListener("submit", agregar_datos);

        function agregar_datos(e){
            e.preventDefault();
            const nueva_cita = {
                mascota : nombre_mascota.value,
                cliente : nombre_cliente.value,
                telefono : telefono.value,
                fecha : fecha.value,
                hora : hora.value,
                sintomas : sintomas.value
            }
            console.log(nueva_cita);
        }

    });