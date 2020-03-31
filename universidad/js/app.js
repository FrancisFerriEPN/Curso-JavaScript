// Crear elemento
const enlace = document.createElement('a');

// agregar clase
enlace.className = "enlace";
enlace.id = "nuevo-id";

// Para añadir el atributo de href
enlace.setAttribute("href","#"); // Con esto se puede agregar caracteristicas nuevas
enlace.href = "perro.com";

// Para añadir texto
enlace.textContent ="Nuevo enlace";
//enlace.appendChild(document.createTextNode("Nuevo Enlace")); 
// Cuidado con append que apila si existe algo no lo reemplaza, si no que agrega mas
document.querySelector("#secundaria").appendChild(enlace);
console.log(enlace);