let aprendiendo = "Arendiendo: ", tecnologia = 'JavaScript';
console.log(aprendiendo+ "- "+tecnologia);
// o
// se puede espaciar directo e esta
console.log(`${aprendiendo} ${tecnologia}`);
// atributos son con puntos
console.log(tecnologia.length);
// No guarda la concatenacion
tecnologia.concat(" Es genial");
console.log(tecnologia);
// Concatena directamente
console.log(tecnologia.concat(" ","Es genial", " y bien chevere"));
// UpperCase
console.log(tecnologia.toUpperCase());
let gato = "       gato vaca 1              ";
console.log(gato.trim());
// No te olvides que esto sirve para let 
let mensaje = "Aprendiendo JavaScript, CSS, HTML, para ser Frontend";
// Devuelve el indie en el cual comienza
console.log(mensaje.indexOf("JavaScript"));
// devuelve -1 si no enuentra el valor (exactamentte -1 no false o null)

console.log(mensaje.indexOf("Php"));
// Se especifica limites
console.log(mensaje.substr(0,11));
// Se especifica el inicio
console.log(mensaje.substr(12));
// Slice
console.log(mensaje.slice(-30));
console.log(mensaje.substr(-30));
//slice y substr funcionan exactamente igual
console.log(mensaje.split(" "));
// replace 
console.log(mensaje.replace("CSS", "PHP"))
// Include
console.log(mensaje.includes("HTML"));
tecnologia = tecnologia + " ";
console.log(tecnologia.repeat(10));