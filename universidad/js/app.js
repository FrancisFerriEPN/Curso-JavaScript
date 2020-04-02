// Delegation

// Esta tecnca onsiste en esperar un clic en cualquier lugar,comproar en donde hizo clic con un if switch y ejecutar el codigo

// Esto sirve cuando tienen una gran cantidad de elementos similares, por que poner un event listener para cada curso seria imposible

// Para escuchar cualquier click  que haya en el documento
document.body.addEventListener('click',eliminarElemento);

function eliminarElemento(evento) {
    evento.preventDefault();
    let elemento;
    elemento = evento.target;
    elemento = evento.target.classList;
    console.log("click");
    console.log(elemento);
    if (evento.target.classList.contains("borrar-curso")){
        console.log("Si!");
        console.log(evento.target.parentElement.parentElement.remove()); 
    } else {
        console.log("No!");
    }
    if (evento.target.classList.contains('agregar-carrito')){
        console.log('Curso agregado');
    }

}