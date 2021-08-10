const sym = Symbol("1");
const sym2 = Symbol("1");

if (sym === sym2) {
	console.log("Son iguales!");
} else {
	console.log("Son diferentes");
}

const nombre = Symbol();
const apellido = Symbol();
const persona = {};
// Agregar nombre y apellido como llaves del objeto
persona[nombre] = "Francis";
persona[apellido] = "Ferri";
persona.tipoCliente = "Premium";
persona.saldo = 500;

// console.log(persona);

// Se debe usar corchetes
console.log(persona[nombre]);

// Las propiedades qeu utilzan un synbol no son iterables
console.log("----");
for (let i in persona) {
	console.log(i);
}

// Definir una descripcion del symbol
const nombreCliente = Symbol("Nombre del Cliente");
const cliente = {};
cliente[nombreCliente] = "Pedro";

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
