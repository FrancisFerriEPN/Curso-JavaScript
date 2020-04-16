document.getElementById("txtBtn").addEventListener("click", cargar_txt);
document.getElementById("jsonBtn").addEventListener("click", cargar_json);
document.getElementById("apiBTN").addEventListener("click", cargar_rest);

// Se requiere dos then el primer para conectarse y extraer la informacion

function cargar_txt(){
    fetch('datos.txt')
        // Establece como quiere el resultado
        .then(resp => resp.text())
        // obtiene el resultado
        .then(empleados => document.getElementById("resultado").innerHTML = empleados)
        .catch(error => console.log(error)); 
}

function cargar_json(){
    fetch('empleados.json')
        .then(resp => resp.json())
        .then(data => {
            let html = "";
            data.forEach(function(empleado){
                html += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;
            });
            document.getElementById("resultado").innerHTML = html;
        })
        .catch(error => console.log(error))
}

function cargar_rest(){
    fetch("https://picsum.photos/list")
        .then(resp => resp.json())
        .then(imagenes => {
            let html = "";
            imagenes.forEach(function(imagen){
                html += `
                    <li> 
                        <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
                        ${imagen.autor}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error))
}