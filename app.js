const cuidades = ["Londres","New York", "Madrid", "Paris"];
const ordenes = new Set([123,231,131,102]);
// Se crea un mapa
const datos = new Map();
// Se agregan caracteristicas
datos.set('nombre','Francis');
datos.set('ocupacion','Estudiante');

// Entries iterador
for(let entrada of cuidades.entries()){
    console.log(entrada);
}

for (let orden of ordenes.entries()){
    console.log(orden);
}

// entries para Map
for (let entrada of datos.entries()){
    console.log(entrada);
}

// Valuues iterador
for(let entrada of cuidades.values()){
    console.log(entrada);
}

for (let orden of ordenes.values()){
    console.log(orden);
}

// Values para Map
for (let entrada of datos.values()){
    console.log(entrada);
}
// KEYS iterator
// Valuues iterador
for(let entrada of cuidades.keys()){
    console.log(entrada);
}

for (let orden of ordenes.keys()){
    console.log(orden);
}

// Keys para Map
for (let entrada of datos.keys()){
    console.log(entrada);
}


// VALOR POR DEFECTO
// EL valor por defecto en los iteradores es values
for(let entrada of cuidades){
    console.log(entrada);
}
// Excepto cuando es llave valor (objetos) ahi devuelve las entries
for (let entrada of datos){
    console.log(entrada);
}

const mensaje = "Aprendiendo JavaScript";

for (let letra of mensaje){
    console.log(letra);
}
//

const enlaces = document.getElementsByTagName('a');
for(let enlace of enlaces){
    //console.log(enlace);
    console.log(enlace.href);
}