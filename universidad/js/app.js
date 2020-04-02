/// variables
const encabezado = document.querySelector("#encabezado");
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector("#vaciar-carrito");
// Click
boton.addEventListener("click",obtenerEvento);

// Doble click
boton.addEventListener("dblclick",obtenerEvento);

// Mouse Enter
boton.addEventListener('mouseenter', obtenerEvento);

// Mouse Leave
boton.addEventListener('mouseleave', obtenerEvento);

// Mouse Over (similar a enter)
boton.addEventListener('mouseover', obtenerEvento);

// Mouse Out (similar a leave)
boton.addEventListener('mouseout', obtenerEvento);

// Mouse Down cuanta cuando presionas el boton
boton.addEventListener('mousedown', obtenerEvento);

// Mouse Up cuanta cuando sueltas el boton
boton.addEventListener('mouseup', obtenerEvento);

// Al moverse dentro del elemento
encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(evento){
    console.log(`EVENTO: ${evento.type}`);
}
