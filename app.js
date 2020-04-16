// Arroy function
let aprendiendo;

aprendiendo = function(){
    console.log("Aprendiendo JavaScript");
}

// Automaticamente al utilizar el  igual para la funcion la variable se volvio un metodo

aprendiendo = () => {
    console.log("Aperendiendo JavaScript");
}


// Cuando es una linea no se requiere llaves
aprendiendo = () => console.log("No se requiere llaves");

aprendiendo();

// Retorna valor
aprendiendo = () => "Retorno directo";


// Objeto
// Se utiliza parentesis como escape a las llaves
aprendiendo = () => ({gato :"Retorno directo"});
console.log(aprendiendo());

// PAsando parametros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

// Cuando se pasa un solo parametro el parentesis es opcional
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

// Si tiene dos o mas parametross los parentesis son obligatirios
aprendiendo = (tec1, tec2) => console.log(`Aprendiendo ${tec1} y ${tec2}`);

aprendiendo("JavaScript", "ES6");

const productos = ["Disco", "camisa", "Guitarra"];

// Se hace un callback

//<<<

let letras_producto = productos.map(function(producto){
    return producto.length;
});

letras_producto = productos.map((producto) => {
    return producto.length;
}) 

letras_producto = productos.map((producto) =>  producto.length);

letras_producto = productos.map(producto =>  producto.length);

console.log(letras_producto);

productos.forEach(producto => {
    console.log(producto);
});

productos.forEach(producto => console.log(producto));
//>>>




