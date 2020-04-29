// Iteradoresç
function crear_iterador(carrito){
    let i = 0;
    return {
        siguiente: () =>{
            let fin = (i >= carrito.length);

            let valor = !fin ? carrito[i++] : undefined;

            return{
                fin:fin,
                valor:valor
            }
        }
    }
}

const carrito =["Producto1","Producto2","Producto3","Producto4"];

const recorrer_carrito = crear_iterador(carrito);
console.log(recorrer_carrito.siguiente());
console.log(recorrer_carrito.siguiente());
console.log(recorrer_carrito.siguiente());
console.log(recorrer_carrito.siguiente());
console.log(recorrer_carrito.siguiente());