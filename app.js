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
