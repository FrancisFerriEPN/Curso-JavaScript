// Variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const boton_enviar = document.getElementById("enviar");
console.log(email, asunto, mensaje, boton_enviar);
// Event Listeners
event_listeners();
function event_listeners(){
    // inicio de la plicacion y desabilitar el boton
    document.addEventListener("DOMContentLoaded", inicio_app);
    //email.addEventListener("keydown",);
    //asunto.addEventListener("keydown",);
    //mensaje.addEventListener("keydown",);
}
// Funciones
function inicio_app(){
    // Desabilitar elboton envio
    // Propiedades del boton n apearece auomaticamente debes recordarla
    // Se cuidadoso con no comerte letras por eso no encuentra las caracteristicas y pareciera que no funcionara
    boton_enviar.disabled = true;
}