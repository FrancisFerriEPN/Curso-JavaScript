
const ciudades =["Londres","New York","Madrid","Paris"];

const [
    primera_ciudad,
    segunda_ciudad
] = ciudades; 

console.log(primera_ciudad);
console.log(segunda_ciudad);


const [,,ciudad,paris] = ciudades;
console.log(paris);
console.log(ciudad);


// cuidadoen con los elementos a lo que accedes
const ciudades =["Londres","New York","Madrid","Paris",{idioma:"Ingles"}];

console.log(ciudades);
[idioma] = ciudades;
console.log(idioma);


// Esta sintaxis es mu eficaz para tratar objetos, arreglos no

const cliente = {
    tipo:"Premium",
    slado: 3000,
    datos:{
        nombre: "Pedro",
        apellido: "Perez",
        residencia: {
            ciudad: "Mexico"
        }
    },
    movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
}


//<<<

// Tienes que especiicar el nombre de la varable
let {
    datos,
    datos:{residencia},
    tipo,
    movimientos: [,dos]
} = cliente;
console.log(residencia);
console.log(tipo);
console.log(datos);
console.log(dos);

//>>>