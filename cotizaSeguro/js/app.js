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
        if(marca_selecionada ===''|| anio_selecionado === '' || tipo === ""){
            interfaz.mostrar_mensaje("faltan datos revisar el formulario y prueba de nuevo","error");
        } else {
            // Limpiar resultados anteriores
            const resultados = document.querySelector('#resultado div');
            if (resultados !== null){
                resultados.remove();
            }
            // Instanciar seguro y mostrar interfaz
            const seguro = new Seguro(marca_selecionada, anio_selecionado, tipo);
            // Cotizar el seguro
            const cantidad = seguro.cotizaz_seguro();

            // Mostarr resultado
            interfaz.mostrar_resultado(seguro, cantidad);
            interfaz.mostrar_mensaje("Cotizando....","exito");
        }
    });
}

// Funciones

// Constructor seguro pago
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizaz_seguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = europeo 1.35
    */
   let cantidad;
   const base = 2000;
   switch (this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
   }

   // Leer el año
   const diferencia = new Date().getFullYear() - this.anio;

   // Ccada año de diferencia hay que reducir el 3% del valor del seguro
   cantidad = cantidad - (3/100 * diferencia* cantidad);
   /*
     Si el seguro es basico se multiplica pr 30% mas
     Si el seguro es completo se multipca or 50% mas
   */
  if (this.tipo === 'basico'){
      cantidad *= 1.30;
  } else {
      cantidad *= 1.50;
  }
   return cantidad;
}

// Interfaz de usuario
function Interfaz(){}

Interfaz.prototype.mostrar_mensaje = function (mensaje,tipo){
    const div = document.createElement("div");
    if (tipo === "error"){
        div.classList.add('mensaje');
        div.classList.add('error');
    } else {
        div.classList.add('mensaje');
        div.classList.add('correcto');
    }
    div.innerHTML= `${mensaje}`;
    formulario_seguro.insertBefore(div, document.querySelector(".form-group"));

    setTimeout(function(){
        document.querySelector(".mensaje").remove();
    },3000);
}

// Imprime el resultado de la cotizacion
Interfaz.prototype.mostrar_resultado = function(seguro, total){
    const resultado = document.getElementById("resultado");
    let marca;
    switch(seguro.marca){
        case '1':
            marca = "Americano";
            break;
        case '2':
            marca = "Asiatico";
            break;
        case '3':
            marca = "Europeo";
    }
    // Crear Div
    const div = document.createElement("div");
    // le agregamos la informacion para el resumern
    div.innerHTML = `
        <p class="header">Tu Resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>TIpo: ${seguro.tipo}</p>
        <p>Total: $${total}</p>
    `;
    const spinner = document.querySelector("#cargando img");
    spinner.style.display = 'block';
    setTimeout(function(){
        spinner.style.display = "none",
        resultado.appendChild(div);
    },3000);
}
// EL año maximo es el año actual
const max = new Date().getFullYear();

const min = max - 20;

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