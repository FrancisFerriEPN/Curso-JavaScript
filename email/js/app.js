// Variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const boton_enviar = document.getElementById("enviar");
const formulario_enviar = document.getElementById("enviar-mail");
const boton_reset = document.getElementById("resetBtn");

// Event Listeners
event_listeners();
function event_listeners(){
    // inicio de la plicacion y desabilitar el boton
    document.addEventListener("DOMContentLoaded", inicio_app);
    email.addEventListener("blur", validar_campo);
    asunto.addEventListener("blur", validar_campo);
    mensaje.addEventListener("blur", validar_campo);

    // boton de enviar en el submit
    //boton_enviar.addEventListener("click",enviar_email);
    formulario_enviar.addEventListener("submit", enviar_email);

    // Boton de reset
    boton_reset.addEventListener("click", resetear_formulario);
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
    // El this hace referencia al objeto en si que tiene anexado el event listener

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

// Resetear el formulario
function resetear_formulario (e) {
    e.preventDefault();
    formulario_enviar.reset();
}
// cuando se evia el correo
function enviar_email(e){
    // verifica la logitud del texto en los campos
    e.preventDefault();
    // spiner al precionar enviar
    const spinner_gif = document.querySelector("#spinner");
    spinner_gif.style.display = 'block';

    // GIF ENVIA EMAIL
    const enviado = document.createElement("img");
    enviado.src = "img/mail.gif";
    enviado.style.display = "block";
    
    // Ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinner_gif.style.display = "none";
        document.querySelector("#loaders").appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            // interesante manera de formatear frmularrio
            formulario_enviar.reset();
        },5000);
    },3000);
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
