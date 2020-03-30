let altura,
anchura;

// Es mejor hacer los ajustes de pantalla con CSS no utilizando el lenguaje de programacion. Solo usa codigo en casos muy especiales
altura = window.innerHeight;
anchura = window.innerWidth;

//altura = window.outerHeight;
//anchura = window.outerWidth;
console.log(altura);
console.log(anchura);

let ubicacion;
// Devuelve la url
ubicacion= window.location;
console.log(ubicacion.port);
console.log(ubicacion.protocol);
//http://127.0.0.1:5500/?s=busqueda
console.log(ubicacion.search);

// Te regresa a paginas anteriores 2 atras
window.history.go(-2);

// 
ubicacion = window.navigator;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.language;
console.log(ubicacion);
// Se puede redireccionar a otra pagina
window.location.href = "http://twitter.com";

// Prompt
const nombre = prompt();
console.log(`Bienvenido ${nombre}`);

// Confirm
if(confirm("ELiminar ?")){
    console.log("Su articulo ha sido eliminado");
}else{
    console.log("Operacion cancelada");
}
