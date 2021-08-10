function* craerGenerador() {
	yield 1;
	yield "Juan", yield 3 + 3;
	yield true;
}

const iterador = craerGenerador();

console.log(iterador);
// console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next().done);
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next()); // Se necesita hacerlo una vez mas para que cambie su estado a closed
console.log(iterador);

// Generador para carrito de compras
function* generadorCarrito(carrito) {
	for (let i = 0; i < carrito.length; i++) {
		yield carrito[i];
	}
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

const iteradorCarrito = generadorCarrito(carrito);

console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
