const navegacion = document.querySelector("#principal");
console.log(navegacion.nodeName);// NAV
console.log(navegacion.children);
console.log(navegacion.children[0].nodeName);// A
console.log(navegacion.children[0].nodeType);// 1
// Los nodos son las etiquetas HTML

// Tipos de Nodos
// 1 = Elementos HTML
// 2 = Atributos
// 3 = Texto
// 8 = comentarios
// 9 = documentos
// 10 = doctype

console.log(navegacion.children[0].textContent = "Nuevo Enlace");

const barra = document.querySelector(".barra");
console.log(barra.children[0].children[0].children);
const cursos = document.querySelectorAll(".card");
console.log(cursos[3].lastElementChild);
console.log(cursos[3].firstElementChild);
// Contar numero de elementos hijos
console.log(cursos[3].childElementCount);