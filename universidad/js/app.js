// Reemplazar elementos
const nuevo_encabezado = document.createElement("h2");
// agregar id 
nuevo_encabezado.id = "encabezado";
console.log(nuevo_encabezado);
nuevo_encabezado.appendChild(document.createTextNode("Los mejores cursos"));

// elemento anterior sera reemplazado

const encabezado_anterior = document.querySelector("#encabezado");
const elemento_padre = encabezado_anterior.parentElement;
// Reemplazar
// nuevo, viejo
elemento_padre.replaceChild(nuevo_encabezado,encabezado_anterior);
console.log(elemento_padre);
