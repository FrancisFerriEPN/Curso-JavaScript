// Variables
const lista_tweets = document.querySelector("#lista-tweets");

// Event Listeners
event_listeners();
function event_listeners(){
    //Cuando se envia el formulario
    // Cuando se enva el formulario se tiene el listener "submit"
    document.querySelector("#formulario").addEventListener("submit", agregar_tweet);
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