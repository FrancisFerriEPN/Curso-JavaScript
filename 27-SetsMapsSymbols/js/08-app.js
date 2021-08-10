const ciudades = ["Londres", "new York", "Madrid", "Paris"];

const ordenes = new Set([123, 231, 131, 102]);

const datos = new Map();
datos.set("nombre", "Francis");
datos.set("profesion", "Desarrolldor Web");

// Default
for (let ciudad of ciudades) {
	console.log(ciudad);
}
for (let orden of ordenes) {
	console.log(orden);
}
for (let dato of datos) {
	console.log(dato);
}

// Keys iterator
for (let key of ciudades.keys()) {
	console.log(key);
}
for (let key of ordenes.keys()) {
	console.log(key);
}
for (let key of datos.keys()) {
	console.log(key);
}

// Values iterator
for (let value of ciudades.values()) {
	console.log(value); // llave valor
}
for (let value of ordenes.values()) {
	console.log(value); // llave valor
}
for (let value of datos.values()) {
	console.log(value); // llave valor
}

// Entries iterator
for (let entry of ciudades.entries()) {
	console.log(entry); // llave valor
}
for (let entry of ordenes.entries()) {
	console.log(entry); // llave  dos veces (llave es igual a valor)
}
for (let entry of datos.entries()) {
	console.log(entry);
}
