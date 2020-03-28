
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar("Francis");
saludar("Pepe");
saludar("Paco");

function sumar(a,b){
    console.log(a + b);
    return a + b;
}
suma = sumar(2,3);
sumar(4,5);

console.log("Esta es la suma " +  suma);
// Forma vieja
function saludar2(nombre){
    if (typeof nombre === 'undefined'){
        nombre = "usuario";
    }
    return `hola ${nombre}`;
}

saludo = saludar2("Francis");
console.log(saludo);
// Si no mandas nada reconoce como undefined
// Ubiese pensado que seria null
// es logico por que no esta definido
saludo = saludar2();
console.log(saludo);

// Forma nueva 
function saludar3(nombre = "usuario"){
    return `Hola ${nombre}`;
}

saludo = saludar3("Gato");
console.log(saludo);
saludo = saludar3();
console.log(saludo);

// function expressin
const suma2 = function(a = 0, b = 0) {
    return a + b;
}
console.log(suma2(3,7));
console.log(suma2(1,1));
// En este cas suma cn el valr default
console.log(suma2(8));

const decir_hola = function(nombre = "usuario", edad = 20, trabajo = "desarrollador web"){
    return `Hola ${nombre} edad: ${edad} trabajo: ${trabajo}`;
}
console.log(decir_hola("Andres"))
console.log(decir_hola())