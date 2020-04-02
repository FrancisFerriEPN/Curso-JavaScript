// Event Listener clic al buscador
alert('Un alert');

document.querySelector("#submit-buscador").addEventListener('click',function(event) {
    // Con esto se previene la accion por defecto, en este caso eso quiere decir que se evita mandar los dats a la siguiente pagina
    event.preventDefault();
    alert("Buscando cursos");
});

document.querySelector("#submit-buscador").addEventListener('click', ejecutar_boton);
function ejecutar_boton(evento){
    evento.preventDefault();
    let elemento;
    elemento = evento;
    elemento = evento.target;
    elemento = evento.target.id;
    elemento = evento.target.className;
    elemento = evento.target.innerText;
    //console.log("Desde la funcion ejecutar Boton")
    console.log(elemento);
}

document.querySelector("#encabezado").addEventListener("click", function(evento) {
    evento.target.innerText = "Nuevo encabezado";
    evento.target.innerText = 2 + 2;
    console.log(evento.target.textContent);
    
});