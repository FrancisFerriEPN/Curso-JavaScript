// Callback en foreach

const ciudades = ['Londres', "New York", "Paris", "Madrid",'Viena'];
// Inline callback
// ESTA ES LA FORMA RECOMENDADA PARA NO HACER EL CODIGO CONFUSO
ciudades.forEach(function(ciudad){
    console.log(ciudad);
})

console.log("\n\nSegunda forma");

//<<<
// No necesita especificar el parametro este es reconocid automaticamente
ciudades.forEach(callback)

// Con funcion definida
function callback(ciudad){
    console.log(ciudad);
}

//>>>

// Listado de paises
const paises = ['Francia', "España", "Portugal", "Australia", "Inglaterra", "Irlanda"];

// Se agrega un nuevo pais despues de dos segundos
function nuevo_pais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        // Se le pasa de parametro una funcion
        callback();
    },2000);
}
// Los paises se agregan despues de un segundo
function mostrar_paises(){
    setTimeout(function(){
        let html = "";
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        })
        document.getElementById("app").innerHTML = html;
    },1000);
}
// Agregar nuevo pais
nuevo_pais("Alemania", mostrar_paises);

// Mostrar los paises
mostrar_paises();
