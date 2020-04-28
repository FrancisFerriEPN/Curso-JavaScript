// Symbol

// No se necesita la palabra new por qu son primitivos de JavaScript
const simbolo = Symbol();
const simbolo2 = Symbol("Descripccion aqui");

// Los simbolos son unicos en la ejecucion de JavaScipt 
console.log(Symbol() == Symbol());


console.log(typeof simbolo);
console.log(simbolo);
console.log(simbolo2);

let nombre = Symbol();
let apellido = Symbol();

let persona = {};
persona.nombre = "Francis";
// Un Symbol se agrega de la siguiente manera
persona[nombre] = "Juan";
persona[apellido] = "De la torre";
persona.saldo = 100;
persona.tipo_cliento = "Normal";

console.log(persona);


// Se accede all valor del Symbol de la siguiente manera
console.log(persona.nombre);
console.log(persona[nombre]);


// Los Symbol no pueden ser iterados n se puede acceder con for
console.log("\nSolamente imprime los valores del objeto no Symbol");
for (let i in persona){
    console.log(`${i}: ${persona[i]}`);
}