document.querySelector("#generar-nombre").addEventListener('submit', cargar_nombres);

// llamando a AJAX e imprimir resultrados
function cargar_nombres(e){
    e.preventDefault();
    // leer las variables
    // NO se llenan automaticamente
    const origen = document.getElementById("origen");
    const origen_seleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById("genero");
    const genero_seleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById("numero").value;

    let url ="";
    url += 'https://uinames.com/api/?';

    if (origen_seleccionado !== ""){
        url += `region=${origen_seleccionado}&`;
    }
    // Si hay un generi agregarlo a la URL
    if (genero_seleccionado !== ""){
        url += `gender=${genero_seleccionado}&`
    }
    // SI hay una cantidad agregarlo a la URL
    if (cantidad !== ""){
        url += `amount=${cantidad}&`;
    }
    console.log(url);

}