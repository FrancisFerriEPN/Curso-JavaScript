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

            mostrar_citas();
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
            
            // En indexed DB se utilizan lñas transacciones
            let transaction = DB.transaction(['citas'], 'readwrite');
            let objectStore = transaction.objectStore("citas");
            //console.log(object_store);
            let peticion = objectStore.add(nueva_cita);
            console.log(peticion);
            peticion.onsuccess = () => {
                form.reset();
            }
            transaction.oncomplete = () => {
                console.log("Cita agregada");
                mostrar_citas();
            }
            transaction.onerror = () => {
                console.log("Hubo un error");
            }
        }

        function mostrar_citas() {
            // Eliminar las citas anteriopres
            while(citas.firstChild){
                citas.removeChild(citas.firstChild);
            }

            // Creamos un objectStore

            let objectStore = DB.transaction("citas").objectStore("citas");

            // Esto retorna una peticion
            objectStore.openCursor().onsuccess = function(e){
                // Cursor se va a ubicar en el regiustro indicado para acceder a los datos
                let cursor = e.target.result
                ;
                //console.log(cursor);
                if(cursor){
                    console.log(cursor.value.mascota);
                    let cita_html = document.createElement("li");
                    cita_html.setAttribute('data-cita-id', cursor.value.key);
                    cita_html.classList.add("list-group-item");
                    cita_html.innerHTML = `
                        <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                        <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                        <p class="font-weight-bold">Telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                        <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                        <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                        <p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
                    `;
                    // boton borrar
                    const boton_borrar = document.createElement("button");
                    boton_borrar.classList.add("borrar", "btn", "btn-danger");
                    boton_borrar.innerHTML = '<span aria-hidden="true">x</span> Borrar';
                    cita_html.appendChild(boton_borrar);
                    //<<<
                    boton_borrar.onclick = borrar_cita;
                    //>>>

                    //apennd en el padre
                    citas.appendChild(cita_html);
                    // Consultar los proximos regstros
                    cursor.continue();
                } else {
                    if (!citas.firstChild){
                        
                        // Cuando no hay registros
                        heading_administra.textContent = 'Agrega citas para comenzar';
                        let listado = document.createElement("p");
                        listado. classList.add("text-center");
                        listado.textContent = "No hay registros";
                        citas.appendChild(listado);

                    } else {
                        heading_administra.textContent ="Adminitra tus citas";
                    }

                }
            }
        }

        function borrar_cita(e){
            let cita_id =Number(e.target.parentElement.getAttribute("data-cita-id"));
             
            // En indexed DB se utilizan lñas transacciones
            let transaction = DB.transaction(['citas'], 'readwrite');
            let objectStore = transaction.objectStore("citas");
            //console.log(object_store);
            let peticion = objectStore.delete(cita_id);
            transaction.oncomplete = () =>{
                e.target.parentElement.parentElement.removeChild(e.target.parentElement);
                console.log(`Se elimino la cita con el ID: ${cita_id}`);
                if (!citas.firstChild){
                        
                    // Cuando no hay registros
                    heading_administra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement("p");
                    listado. classList.add("text-center");
                    listado.textContent = "No hay registros";
                    citas.appendChild(listado);

                } else {
                    heading_administra.textContent ="Adminitra tus citas";
                }
            }
        }

    });