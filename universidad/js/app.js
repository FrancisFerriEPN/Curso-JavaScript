const busqueda = document.querySelector("#buscador");
// Key Down
busqueda.addEventListener("keydown",obtenerEvento);

//Key Press
busqueda.addEventListener("keypress",obtenerEvento);

// Key UP
busqueda.addEventListener("keyup",obtenerEvento);

// Cuando das clic dentro para comenzar a escribir
busqueda.addEventListener("focus",obtenerEvento);

// Uno de los mas utilizados es blur, este sirve para vlida los campos ana vez da clic fuera de estos.
busqueda.addEventListener("blur",obtenerEvento);

// COPIAR CORTAR Y PEGAR
// Cuando alguien corta el texto del formulario
busqueda.addEventListener("cut",obtenerEvento);
busqueda.addEventListener("copy",obtenerEvento);
busqueda.addEventListener("paste",obtenerEvento);

// Este es un todo en uno a todo le trata como accion
busqueda.addEventListener("input",obtenerEvento);

// NO SE PUDO APLICAR ESTE POR QUE NO HABIA SELECTS, PERO SE NOTA PARA QUE SIRVE COMPROBAR CAMBIOS
busqueda.addEventListener("change",obtenerEvento);

function obtenerEvento(evento){
    document.querySelector("#encabezado").innerText = busqueda.value;
    //console.log(busqueda.value);
    console.log(`EVENTO: ${evento.type}`);
}
