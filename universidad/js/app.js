const enlaces = document.querySelectorAll(".enlace");
const navegacion = document.querySelector('#principal');
// No se reordenan los enlaces se quedan con sus indices asi se borren
enlaces[0].remove();
console.log(enlaces);
navegacion.removeChild(enlaces[1]);
console.log(navegacion);

const primerLi = document.querySelector('.enlace');
let elemento;
// SI quieres obtener una clase
elemento = primerLi.className;  
// Si el elemento tiene varias clases
elemento = primerLi.classList.add("nueva-clase"); // agregar clase
elemento =primerLi.classList;
primerLi.classList.remove("nueva-clase");
// Obtener Valor
elemento = primerLi.getAttribute("href");
// Cambiar valor
primerLi.setAttribute("href","http://facebook.com");
primerLi.setAttribute('data-id',20);

// Busar si existe el atributo
elemento = primerLi.hasAttribute("data-id");
// Remover atributo
primerLi.removeAttribute("data-id");
elemento = primerLi;
console.log(elemento);