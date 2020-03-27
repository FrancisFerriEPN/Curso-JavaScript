const numeros = [1,2,3,4];
// Cnst n permitte reescribir la variable directamente
//numeros = [7,6,3,8];

// let si permite reescribir la variable 
//let numeros = [1,2,3,4];
//numeros = [7,6,3,8];
// A pesar de ser constante se puuede reasignar valores en elarreglo
numeros[0] = 6;
numeros.push(5);
numeros.unshift(9);
console.log(numeros);