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
    email.addEventListener("blur", validar_campo);
    asunto.addEventListener("blur", validar_campo);
    mensaje.addEventListener("blur", validar_campo);
}
// Funciones
function inicio_app(){
    // Desabilitar elboton envio
    // Propiedades del boton n apearece auomaticamente debes recordarla
    // Se cuidadoso con no comerte letras por eso no encuentra las caracteristicas y pareciera que no funcionara
    boton_enviar.disabled = true;
}

// Valida que el campo tenga algo escrito
function validar_campo(){
    // Se valida la longitud del texto y que no este vacio
    // EL this hace referencia al objeto en si que tiene anexado el event listener

    // EXCELENTE MANERA DE VALIDAR
    validar_longitud(this);

    // validar unicamente el email
    if (this.type === "email"){
        validar_email(this);
    }
    let errores = document.querySelectorAll(".error");
    if(email.value !== '' && asunto.value !== "" && mensaje.value !== ""){
        if (errores.length === 0){
            boton_enviar.disabled = false;
        }       
    } else {
        boton_enviar.disabled = true;
    }
}

function validar_longitud(campo){
    console.log(campo.value.length);
    if (campo.value.length >0){
        // Acuerdate del style, este permite modificar el css del objeto
        campo.style.borderBottomColor =  "green";
        // Con esto nos aseguramos de que no pueda validar si hay errores
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor =  "red";
        campo.classList.add("error");
    }
}

function validar_email(campo){
    const mensaje = campo.value;
    // No te olvides de esta funcion que devuelve el -1
    if (mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor =  "green";
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor =  "red";
        campo.classList.add("error");
    }
}

// Se cuidadoso aun puede dar clic en boton  esta editando un camp y da directamente un clic
// se puede resolver esto validando todo nuevamente al momento de dar clic
