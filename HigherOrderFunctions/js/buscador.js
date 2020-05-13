// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
function obtener_autos () {
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}



// Datos para la busqueda
let datos_busqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};




// Event listener DOM Loaded
const autos = obtener_autos();

document.addEventListener("DOMContentLoaded", ()=>{
    mostrar_autos(autos);
});

// Event listener par el formulario
const marca = document.querySelector("#marca");
marca.addEventListener('input', e => {
    datos_busqueda.marca = e.target.value;
    // Si utilizas function puedes utilizar this.value. Es extraño pero es algo propio del codigo

    // mandar a llamar una funcion de filtrar autos
    filtrar_autos();

});

const year = document.querySelector("#year");
year.addEventListener('input', e => {
    datos_busqueda.year = Number(e.target.value);
    filtrar_autos();
});

const minimo = document.querySelector("#minimo");
minimo.addEventListener('input', e => {
    datos_busqueda.minimo = Number(e.target.value);
    filtrar_autos();
});

const maximo = document.querySelector("#maximo");
maximo.addEventListener('input', e => {
    datos_busqueda.maximo = Number(e.target.value);
    filtrar_autos();
});

function mostrar_autos(autos){

    // Leer el elemento resultado
    const contenedor = document.querySelector("#resultado");

    // Limpiar los resultados anteriores
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }

    // Cosntruir el html de los autos
    autos.forEach(auto => {
        //console.log(auto);
        const auto_html = document.createElement("p");
        auto_html.innerHTML = `
            <p>${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas Transmision: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(auto_html);
    });
}


// Hogher order functions son funciones qe toman funciones como parametros

function filtrar_autos(){


//<<<
    // Con el filter pasa directo los valores sin necesidad de poner nada extra
    const resultado = obtener_autos().filter(filtrar_marca).filter(filtrar_year).filter(filtrar_minimo).filter(filtrar_maximo);
    if (resultado.length){
        mostrar_autos(resultado);
    } else {
        alert("No hay resultados");
    }
}
function filtrar_marca(auto){
    if (datos_busqueda.marca){
        console.log(auto.marca === datos_busqueda.marca);
        return auto.marca === datos_busqueda.marca;
    } else {
        return auto;
    }
}

function filtrar_year(auto){
    if (datos_busqueda.year){
        // Lo estaba guardando como string por eso se catea a nombre
        return auto.year === datos_busqueda.year;
    } else {
        return auto;
    }
}
//>>>

function filtrar_minimo(auto){
    if (datos_busqueda.minimo){
        return auto.precio >= datos_busqueda.minimo;
    } else {
        return auto;
    }
}

function filtrar_maximo(auto){
    if (datos_busqueda.maximo){
        return auto.precio <= datos_busqueda.maximo;
    } else {
        return auto;
    }
}