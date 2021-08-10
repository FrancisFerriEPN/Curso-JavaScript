function crearIterador(carrito) {
	let i = 0;
	return {
		siguiente: () => {
			const fin = i >= carrito.length;
			const valor = !fin ? carrito[i++] : undefined;
			return {
				fin,
				valor
			};
		}
	};
}

const carrito = ["Producto1", "Producto2", "Producto3"];
const recorrercarrito = crearIterador(carrito);

console.log(recorrercarrito.siguiente());
console.log(recorrercarrito.siguiente());
console.log(recorrercarrito.siguiente());
console.log(recorrercarrito.siguiente());
