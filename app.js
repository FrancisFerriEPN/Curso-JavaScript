const numeros = [10, 20,30,40,50,60];
console.log(numeros);

// Arreglo de strings

const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
console.log(meses);
/*
const mezclado = new Array("Hola", 20, true, null, false, undefined);
console.log(mezclado);
*/
console.log(meses.length);
console.log(Array.isArray(meses));
console.log(meses[1]);
meses[4] ="Mayo";
console.log(meses);
// Insertar al final
meses.push("Junio");
// Insertar al inicio
meses.unshift("Mes 0");
// Encontrar un elemento en el arreglo
console.log(meses.indexOf("Marzo")); 
console.log(meses);
// Eliminar un elemento del final
meses.pop();
console.log(meses);
// Eliminar un element del inicio
meses.shift();
console.log(meses);
// Quitar un element pr indice 
meses.splice(3,1);
console.log(meses);
// Quitar rango
meses.splice(2,2);
// Invertir arreglo
meses.reverse();
console.log(meses);
// Cncatenar arreglos
let arreglo1 = [1,2,3], arreglo2 = [9,8,7];
console.log(arreglo1.concat(arreglo2));

// Ordenar un arreglo
const frutas = ["paltano", "manzana", "pera", "naranja", "coco"];
frutas.sort();
console.log(frutas);
// ordenar numers
arreglo1 = [1,3,2,99,87,12,34,54,63,1,2];
arreglo1.sort() // Si se utiliza direct sort funcina mal ordena alfabeticamente los numeros por asi decirlo
console.log(arreglo1);

arreglo1.sort(function(x, y){
    return x - y;
    //return y -x; // descendente
    // Lo que hace internamente es que si x -y es <0 deja en el mismo orden si es maor hace un switch
})

console.log(arreglo1);