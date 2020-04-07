const select_anio = document.getElementById("anio");

// Cotizador
function Seguro(){

}

// EL año maximo es el año actual
const max = new Date().getFullYear();

const min = max - 20;
console.log(max);
console.log(min);
console.log(select_anio);

//let anios = [];

for(let i = max; i >= min; i--){
    //anios.push(i);
    // De ley debe ir dentro del for
    let opcion_anio = document.createElement("option");
    opcion_anio.value = i;
    opcion_anio.textContent = i;
    select_anio.appendChild(opcion_anio);
}
//console.log(anios);