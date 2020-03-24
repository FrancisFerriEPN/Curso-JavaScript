<<<<<<< HEAD
let valor ;
valor = 'cadena';
valor = 20;
valor = true;
valor = null,
valor = undefined;

valor = {
    nombre : 'Francis',
    apellido : "Ferri"
}

console.log(valor);
// Calcular tiempo
console.time("proceso");
console.log('e esta realizando un proceso largo no te desanimes');
console.timeEnd("proceso");

// Comprobar valores
//valor = 'cadena';
console.log(typeof(valor));
valor = 20;
console.log(typeof valor);
// Diferencia ente undefined y null
valor = undefined;
console.log(typeof valor);
valor = null;
console.log(typeof valor);

// Symbol
valor = Symbol("Simbolo");
// Los arreglos son considerados com un objeto
valor = [1,2,3,4];
// Fecha es onsiderada objeto
valor = new Date();
console.log(typeof valor);
const numero1 =20;
const numero2 = 50;
const numero3 = '20';
console.log(numero1 > numero2);
console.log(numero1 < numero2);
// Usar 2 iguales comparador no estricto
console.log(numero1 == numero3);
// Utilizar 3 iguales comparador estricto revisa tipo de dato
console.log(numero1 === numero3);
console.log(typeof numero1);
console.log(typeof numero3);
// Diferente
console.log(2 != 3);
console.log("Hola" == " Hola")

// EL rando de letras va desde A <... z es decir que la A mayuscula es la letra de menor valor y z minuscula la de mayor
console.log('a'<'b');
// Z < a las inusculas sn mayores que las mayyusculas
console.log('Z' > 'a')
//
console.log('z' > 'A')

// true con operador no estricto
console.log(null == undefined);
// false con operador estricto
console.log(null === undefined);

// UTILZA SIEMPRE EL COMPARADOR CON TRES SIGNOS DE IGUAL
