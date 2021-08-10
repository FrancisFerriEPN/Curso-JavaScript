const carrito = new Set();
carrito.add("camisa");

carrito.add("Disco #1");

carrito.add("Disco #2");
carrito.add("Disco #3");
carrito.add("camisa"); // No se agrega nuevamente

const borrado = carrito.delete("Disco #3"); // Puede devlolver true o false

console.log(carrito.delete("Inventado")); // false
console.log(borrado);

console.log(carrito.has("camisa"));

console.log(carrito.size);

carrito.forEach((producto) => console.log(producto));

// producto is equal than index
carrito.forEach((producto, index) => console.log(producto, index));

console.log(carrito);

carrito.clear();

// Del siguiente arreglo eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);
