// Event Bubling
const card = document.querySelector('.card');
const info_curso = document.querySelector(".info-card");
const agregar_carito = document.querySelector(".agregar-carrito");

// Hay otros elementos que son clickeados sin querer, esto podria ocacionar problemas cn los event listener

card.addEventListener("click",function(evento){
    console.log("Click en card");
    evento.stopPropagation();
});

info_curso.addEventListener("click",function(evento){
    console.log("Click en info-curso");
    evento.stopPropagation();
});

agregar_carito.addEventListener("click",function(evento){
    console.log("Click en Agregar a carrito");
    evento.stopPropagation();
});