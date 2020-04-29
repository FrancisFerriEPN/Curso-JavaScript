let carrito = new Set();


carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");

// <<<
// El set no permite elementos duplicados
carrito.add("Disco #2");
//>>>

console.log(carrito);
console.log(carrito.size);

let numeros = new Set([1,2,3,4,5,6,7,1,2,3,4]);
console.log(numeros);
console.log(numeros.size);

//<<<

// comprobar si un valor existe
console.log(carrito.has("Camisa"));
console.log(carrito.has("Guitarra"));

// borrar elemento
carrito.delete("Camisa");
console.log(carrito);

// Iterar
carrito.forEach(producto => {
    console.log(producto);
});

// No tienen llave por eso devuelven cosas como
// Producto: Disco #1 Posicion:Disco #1
// En el set la llave y el valo son iguales
carrito.forEach((producto,index) => {
    console.log(`Producto: ${producto} Posicion:${index}`);
});

// Convertir un set a un arreglo
const arreglo_carrito  = [...carrito];
console.log(arreglo_carrito);

// limpiar Set
carrito.clear();
console.log(carrito);
//>>>