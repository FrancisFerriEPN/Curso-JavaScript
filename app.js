// Generadores
// Est es ECMASCript 6
function *crear_generador(){
    // yield
    yield 1;
    yield "Nombre";
    yield 3+3;
    yield true;
}

const iterador = crear_generador();
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function *nuevo_generador(carrito){
    for(let i=0; i < carrito.length; i++){
        yield carrito[i];
    }
}
// creamos el carrito carrito
const carrito = ['Producto1','Producto2','Producto3','Producto4'];

// recorremos el iterador
let nuevo_iterador = nuevo_generador(carrito);

console.log(nuevo_iterador.next().value);
console.log(nuevo_iterador.next().value);
console.log(nuevo_iterador.next().value);
console.log(nuevo_iterador.next().value);
console.log(nuevo_iterador.next().value);
console.log(nuevo_iterador.next().done);