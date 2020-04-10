const cargar_post = document.querySelector("#cargar");
cargar_post.addEventListener("click",cargar_API);

function cargar_API(){
    // crear objeto
    const xhr = new XMLHttpRequest();
    // abrir la conexion
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    // leer datos
    xhr.onload = function(){
        if(this.status === 200){
            const respuestas = JSON.parse(this.responseText);
            let contenido ="";
            respuestas.forEach(function(post) {
                contenido += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });
            document.getElementById("listado").innerHTML = contenido;
        }
    };
    // enviar la conexion
    xhr.send();
}