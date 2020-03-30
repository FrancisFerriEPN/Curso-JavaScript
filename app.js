// Recorrrer un arreglo con for each
const pendientes = ['Tarea', 'Comer', 'proyecto', 'Aprender JavaScript'];

// For normal
for(let i = 0; i < pendientes.length; i++){
    console.log(pendientes[i]);
}


pendientes.forEach(element => {
    console.log(`Realizando ${element}`);
});


console.log("For each propio");
pendientes.forEach( function(pendiente){
    console.log(`${pendiente}`);
});

// Puedes anexar el indice directamente a la funcion
console.log("For each propio");
pendientes.forEach( function(pendiente, index){
    console.log(`${pendiente} en la posicion ${index}`);
});

// Map para recorrer un arreglo de objetos
const carrito = [
    {id: 1, producto:"Libro"},
    {id: 2, producto:"Camisa"},
    {id: 3, producto:"Guitarra"},
    {id: 4, producto:"Disco"},
];

// Obtiene todos los nombres e productos en carrito
const nombre_producto = carrito.map(function(carrito){
    return carrito.producto;
});
console.log(nombre_producto);

// Recorrer objeto usasndo for
const automovil = {
    modelo: "camaro",
    motor: "6.1",
    marca:"chevrolet"
};

// 
console.log(automovil);
 for (let caracterstica in automovil){
     console.log(`${caracterstica} : ${automovil[caracterstica]}`)
 }

 