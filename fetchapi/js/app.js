document.getElementById("txtBtn").addEventListener("click", cargar_txt);


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