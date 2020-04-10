document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    //Crear el objeto XML HHTP request
    const xhr = new XMLHttpRequest();
    // Se define el metodo
    // EL true define que es asincrono
    xhr.open('GET','datos.txt', true);

    // una vez que carga la pagina
    xhr.onload = function(){
        // 200 : Correcto | 403: Request prohivido | 404: No encntrado

        // En pocas si lo logro
        if(this.status === 200){ // this se refieree dircetamente aa la conexion
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        } 
    }

    // METODO ANTIGUO
    xhr.onreadystatechange = function(){
        console.log(`Etsado ${this.readyState}`);
        // para obtener la respuesta se debe esperar a que este en 4 y que el estado sea 200
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
        }
    }
    // eady states
    /*
        0 - No inicializado
        1 - conexion establecida
        2 - Recibido
        3 - procesado
        4 - Respuesta lista
     */

    // Enviar el request
    xhr.send();
}