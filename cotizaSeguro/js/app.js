// variables
const formulario_seguro = document.getElementById("cotizar-seguro");
let select_marca = document.querySelector("#marca");
const select_anio = document.getElementById("anio");

//
// Event Listeners
agregar_event_listenrs();

function agregar_event_listenrs(){
    formulario_seguro.addEventListener("submit", function (e){
        e.preventDefault();
        
        
        // No aparce directamente estas opciones. Esto se usa para un select-option
        let marca_selecionada = select_marca.options[select_marca.selectedIndex].value;

        // leer el año
        let anio_selecionado = select_anio.options[select_anio.selectedIndex].value;


        // Leer el Radio Button
        let tipo = document.querySelector('input[name="tipo"]:checked').value;

        // Crear instancia de interfaz
        const interfaz = new Interfaz();

        // revisamos que los camos no esten vacios
        if(marca_selecionada===''|| anio_selecionado === '' || tipo === ""){
            console.log("Faltan datos");
        } else {
            // Instanciar seguro y mostrar interfaz
            console.log("Todo correcto");
        }


        console.log(marca_selecionada);
        console.log(anio_selecionado);
        console.log(tipo)
    });
}

// Funciones

// Constructor seguro pago
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}
// Interfaz de usuario
function Interfaz(){
    // TOdo lo que se muestra
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