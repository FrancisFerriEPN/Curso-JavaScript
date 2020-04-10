const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

boton1.addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "empleado.json", true);
    xhr.onload = function(){
        if(this.status === 200){
            // Se combierte la cadena de texto que resive el request en un objjeto JSON real
            const persona = JSON.parse(this.responseText);
            const html_template = `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Actividades: ${persona.trabajo}</li>
            </ul>
            `;
            document.getElementById("empleado").innerHTML= html_template;
        }
    }

    xhr.send();
});

boton2.addEventListener("click",function() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "empleados.json", true);
    xhr.onload = function(){
        if(this.status === 200){
            
            // Directamente me hace la transformacion de arreglo
            const personal = JSON.parse(this.responseText);
            let html_template;
            personal.forEach( function(persona){

                // Se puede sumar
                html_template += `
                
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Actividades: ${persona.trabajo}</li>
                </ul>
                `;
            });
            document.getElementById("empleados").innerHTML = html_template;
        }
    }

    xhr.send();
});