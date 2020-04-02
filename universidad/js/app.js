// Agregar a localstorage
localStorage.setItem('nombre','Francis');

// Session storage
sessionStorage.setItem("nombre", "Francis");

// EL sesion storage se cierra cuuando el usuario cierra el navegador
// El local storage se puede cuado el usuario borra el cache del navegador

// Eliminar de local storage
//localStorage.removeItem("nombre");

const nombre = localStorage.getItem("nombre");
console.log(nombre)

// Para eliminar todo el local storage
localStorage.clear();