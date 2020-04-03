// Variables
const lista_tweets = document.querySelector("#lista-tweets");

// Event Listeners
event_listeners();
function event_listeners(){
    //Cuando se envia el formulario
    // Cuando se enva el formulario se tiene el listener "submit"
    document.querySelector("#formulario").addEventListener("submit", agregar_tweet);

    // Borrar tweets
    lista_tweets.addEventListener("click", borrar_tweet);
}
// Funciones
function agregar_tweet(evento){
    // Normalmente no sugiere el preventDefault
    evento.preventDefault();
    // Normalmente no sugiere el value
    const tweet = document.getElementById("tweet").value;

    // Crear boton eliminar
    const boton_borrar = document.createElement(`a`);
    // Class List tampoco sale directo // Se ve chevere por los estilos de la clase
    boton_borrar.classList = "borrar-tweet";
    boton_borrar.textContent = "X";
    
    // Crear elemento y añadirlo al contenido de la lista
    const li = document.createElement("li");
    li.textContent = tweet;
    const lista_tweets = document.querySelector("#lista-tweets");

    //Se agrega al li el boton 
    li.appendChild(boton_borrar);

    // Se agrega el tweet a la lista
    lista_tweets.appendChild(li);    
}

function borrar_tweet(evento) {
    evento.preventDefault();
    if(evento.target.className === "borrar-tweet"){
        console.log("Diste clic en eliminar");
        // No sugiere automaticaente parent element
        evento.target.parentElement;
        console.log(evento.target.parentElement);
        // No sugiere automaticamente remove
        evento.target.parentElement.remove();
        alert("Se ha eliminado un tweet");
    } 
}
