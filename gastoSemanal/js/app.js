// Variables
const presupuesto_usuario = prompt("Cual es tu presumpuest Semanal");
const formulario = document.getElementById("agregar-gasto");

let cantidad_presupuesto;

// Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    // Metodo para ir restando del presupuesto actual
    presupuesto_restante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }

}

// Clase de INterfaz maneja todo lo relacionado con el HTML
class Interfaz{
    insertar_presupuesto(cantidad){
        // Estan unidos el element y la etiqueta en el querry selector
        const presupuesto = document.querySelector("span#total");
        const restante = document.querySelector("span#restante");
        // Insertar al html
        presupuesto.innerHTML = `${cantidad}`;
        restante.innerHTML = `${cantidad}`;
    }

    imprimir_mensaje(mensaje, tipo){
        const div_mensaje = document.createElement("div");
        div_mensaje.classList.add('text-center','alert');

        if (tipo === "error"){
            // est clase pone texto rojo
            div_mensaje.classList.add('alert-danger');
        } else {
            // Esta clase pone texto verde
            div_mensaje.classList.add("alert-success");
        }

        //<<<
        div_mensaje.appendChild(document.createTextNode(mensaje));
        //>>>

        // Insertar en el DOM
        document.querySelector('.primario').insertBefore(div_mensaje, formulario);
        // Quitar el alert despes de tres segundos
        setTimeout(function(){
            document.querySelector(".primario .alert").remove();
            formulario.reset();
        },3000);
    }

    // Inserta gasto a la lista
    agregar_gasto_lista(nombre_gasto, cantidad_gasto){
        const listado_gastos = document.querySelector("#gastos ul");
        const li = document.createElement("li");
        li.className = "list-grop-item d-flex justify-content-between align-items-center";
        // Insertar gasto
       li.innerHTML = `
        ${nombre_gasto}
        <span class="badge badge-primary badge-pill">$${cantidad_gasto}
       `;

       // Insertar al HTML
       listado_gastos.appendChild(li);
    }

    // Comprueba el presupuesto restante
    presupuesto_restante(cantidad_gasto){
        const restante = document.querySelector("span#restante");
        // Leemos el presupueso restante
        const presupuesto_restante_usuario = cantidad_presupuesto.presupuesto_restante(cantidad_gasto);
        restante.innerHTML = `${cantidad_presupuesto.restante}`;

        //<<<
        this.comprobar_presupuesto();
        //>>>
    }

    // Cambia de color el presupuesto restante
    comprobar_presupuesto(){
        const presupuesto_total = cantidad_presupuesto.presupuesto;
        const presupuesto_restante = cantidad_presupuesto.restante;
        // COmprobar el 25%
        if ((presupuesto_total/4) > presupuesto_restante) {
            const restante = document.querySelector('.restante');

            //<<<
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add("alert-danger");
            //>>>

        } else if((presupuesto_total/2) > presupuesto_restante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add("alert-warning");
        }
        // comprobar el 50% del gasto

    }
}

// Event Listeners
// ESto produce que tenga que poner algo aceptado antes de que se desbloquee la aplicacion
document.addEventListener("DOMContentLoaded", function(){
    if(presupuesto_usuario === null || presupuesto_usuario === ""){
        window.location.reload();
    } else {
        // INstanciar un presupuesto
        cantidad_presupuesto = new Presupuesto(presupuesto_usuario);
        // Instanciar la clase dinterfaz
        const ui = new Interfaz();
        ui.insertar_presupuesto(cantidad_presupuesto.presupuesto);
    }
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Leer del frulario de gastos
    // Los input titnen atributo .value para obtener lo que esta escrito
    const nombre_gasto = document.getElementById("gasto").value;
    const cantidad_gasto = document.getElementById("cantidad").value;

    // Instanciar la interfaz
    const ui = new Interfaz();

    if (nombre_gasto === "" || cantidad_gasto === ""){
        ui.imprimir_mensaje("Hubo un error", "error");
    } else {
        // Insertar en el HTML
        ui.imprimir_mensaje("Correcto", "correcto");
        ui.agregar_gasto_lista(nombre_gasto, cantidad_gasto);
        ui.presupuesto_restante(cantidad_gasto);
    }
});