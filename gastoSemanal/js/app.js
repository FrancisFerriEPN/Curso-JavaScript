// Variables
const presupuesto_usuario = prompt("Cual es tu presumpuest Semanal");

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