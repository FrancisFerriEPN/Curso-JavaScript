var a ='a';
let b = 'b';
const c = 'c';

// Scope en la funcion 
function funcion_Scope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCION: '+ a,b,c);

}
funcion_Scope();
// Scope en bloque
if(true){
    var a = 'AA'; // Se resscibe
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE: '+ a,b,c);
}
// for
for(var a = 0; a <3; a++){
    console.log(a);
}
// Se puede imprmir directo asi
console.log('GLOBALES: '+ a,b,c);
//var en la ejecucion del programa si modifica las variables globales
// Si usas let y const los valores globales (primeros) nunca van a ser cambiados si las redeclaras en funciones y estructuras de controls