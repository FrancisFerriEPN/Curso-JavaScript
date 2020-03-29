const edad = 19;
if(edad != 18){
    console.log("Si puedes entrar");
}else {
    console.log("No puedes entrar");
}


// Comprobar que una variable tiene un valor

// Si es undefined  nulo va a decir que no hay puntaje
let puntaje;
if(puntaje) {
    console.log(`EL puntaje fue de ${puntaje}`);
} else {
    console.log(`No hay puntaje`)
}
//Esto permitte compprobar formularios
console.log(puntaje);

if (typeof puntaje != 'undefined'){
    console.log(`EL puntaje es de ${puntaje}`)
}else {
    console.log(`No hay puntaje`);
}

let efectivo = 500;
let total_carrito =300;
if(efectivo >= total_carrito){
    console.log("Pago correcto")
}else {
    console.log(`No dispone de fonds suficientes`)
}

// Tambien se puede quitar las llaves cuando es sl una instruccion la que sigue
if(efectivo >= total_carrito)
    console.log("Pago correcto");
else 
    console.log(`No dispone de fonds suficientes`);
// Aun asi siemmpre utiliza llaves