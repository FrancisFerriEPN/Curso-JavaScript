document.getElementById("txtBtn").addEventListener("click", cargar_txt);
document.getElementById("jsonBtn").addEventListener("click", cargar_json);

// Se requiere dos then el primer para conectarse y extraer la informacion

function cargar_txt(){
    fetch('datos.txt')
        // Establece como quiere el resultado
        .then(function(resp){
            return resp.text();
        })
        // obtiene el resultado
        .then(function(empleados){
            console.log(empleados);
            document.getElementById("resultado").innerHTML = empleados;
        })
        .catch(function(error){
            console.log(error);
        })
}

function cargar_json(){
    fetch('empleados.json').then(function(resp){
        return resp.json();
    }).then(function(data){
        let html = "";
        data.forEach(function(empleado){
            html += `
                <li>${empleado.nombre} ${empleado.puesto}</li>
            `;
        });
        document.getElementById("resultado").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}