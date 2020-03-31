/// Query selector
// este sirve para id y para clases  a diferencia de getElementById
// . clase
// # id
let encabezado = document.querySelector(".encabezado");// Solo un elemento

// Aplicar CSS
encabezado.style.background = "#333";
encabezado.style.color = "#fff";
encabezado.style.padding = "20px";
encabezado.textContent = "Los mejores cursos";

encabezado = document.querySelector("h1");

encabezado = document.querySelectorAll("img");// Varios elementos
console.log(encabezado);
// Para obtener uno de los hijos de una clase
let enlace
enlace = document.querySelector("#principal a:first-child");
enlace = document.querySelector("#principal a:last-child");
enlace = document.querySelector("#principal a:nth-child(3)");
console.log(enlace);
