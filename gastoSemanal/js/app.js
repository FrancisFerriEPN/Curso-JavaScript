// Variables
const presupuesto_usuario = prompt("Cual es tu presumpuest Semanal");

let cantidad_presupuesto;

console.log(presupuesto_usuario);
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

// Event Listeners
// ESto produce que tenga que poner algo aceptado antes de que se desbloquee la aplicacion
document.addEventListener("DOMContentLoaded", function(){
    if(presupuesto_usuario === null || presupuesto_usuario === ""){
        window.location.reload();
    } else {
        // INstanciar un presupuesto
        cantidad_presupuesto = new Presupuesto(presupuesto_usuario);

        console.log(cantidad_presupuesto);
    }
})