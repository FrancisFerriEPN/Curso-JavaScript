// variables
const cursos = document.querySelector("#lista-cursos");
const carrito = document.getElementById("carrito");
const lista_cursos = document.querySelector("#lista-carrito tbody");
// listeners
cargar_event_listeners();


function cargar_event_listeners(){
    // Dispara cuando se preciona agregar carrito
    cursos.addEventListener("click", comprar_curso)
}

// funciones

// Funcion que añade el curso al carrito
function comprar_curso(evento){
    evento.preventDefault();
    // Delegation para agregar-carrito
    if (evento.target.classList.contains("agregar-carrito")){
        const curso = evento.target.parentElement.parentElement;
        // Enviamos el curso seleccionadao para tomar sus datos
        leer_datos_curso(curso);
    }
}

// Lee los dats del curso
function leer_datos_curso(curso){

    const info_curso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent, 
        // El getAttribute no sale directamente
        id : curso.querySelector("a").getAttribute("data-id")
    }
    insertar_carrito(info_curso);
}

// Muestra el curso seleccionado en el carrito
function insertar_carrito(curso){
    const row = document.createElement("tr");
    // Siempre haslo mediante template
    row.innerHTML = 
    `
    <td>
        <img src= "${curso.imagen}" width=100>        
    </td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>
        <ahref="#" class="borrar-curso data-id="${curso.id}">X</a>
    </td>
    `;
    
    lista_cursos.appendChild(row);
}