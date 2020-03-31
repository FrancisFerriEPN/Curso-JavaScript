
let enlaces = document.getElementsByClassName("enlace");
console.log(enlaces);
let enlace = enlaces[2];
enlace.style.background = '#333';
enlace.textContent = "Nuevo Enlace";
console.log(enlace);

enlaces = document.getElementsByClassName("enlace")[2];
console.log(enlaces);

// Se puede combinar getElement con querrySelector 
const listaEnlaces = document.querySelector("#principal").getElementsByClassName("enlace");
console.log(listaEnlaces);

const links = document.getElementsByTagName("a");
links[18].style.color = 'red';
links[18].textContent = "Nuevo enlace";
let links_array = Array.from(links);
links_array.forEach(function(enlace){
    console.log(enlace.textContent);
});
