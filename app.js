// Operador || y &&
let efectico = 300,
credito =300,
totalCarrito = 500;
disponible = efectico + credito;
if(totalCarrito <efectico || totalCarrito < credito || totalCarrito <= disponible){
    console.log('Puedo pagar');
}else {
    console.log('No puedo pagar');
}

// Ternario
let logueado = true;
console.log(logueado === true ? 'Si se logueo': 'No se logueo');