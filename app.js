// String
const nombre1 = "Pedro"; // tipo string
const nombre2 = new String("Pedro"); // tipo objeto

console.log(typeof nombre1);
console.log(typeof nombre2);
console.log(nombre2);

// En comparacion no estricta son considerados iguales
if (nombre1 == nombre2){
    console.log("Si, iguales");
} else {
    console.log("No, diferentes");
}

// En comparacion estricta son considerados distntos
if (nombre1 === nombre2){
    console.log("Si, iguales");
} else {
    console.log("No, diferentes");
}

// Numeros
const numero1 = 20;
const numero2 = new Number(20);
console.log(numero1);
console.log(numero2);

// Booleanos
const boolean1 = true;
const boolean2 = new Boolean(true);
console.log(boolean1);
console.log(boolean2);

// Funciones
const funcion1 = function (a, b) {
    return a + b;   
}

// Muy poco usada
const funcion2 = new Function('a', 'b', 'return 1 + 2');

console.log(funcion1(2,3));
console.log(funcion2(1,2));


// Objetos (Son exactamente iguales)
const persona1 = {
    nombre : 'Francis'
}
const persona2 = new Object({nombre: 'Francis'});

console.log(persona1);
console.log(persona2);

// Arreglos (Son exactamente iguales)
const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4);

console.log(arreglo1);
console.log(arreglo2);