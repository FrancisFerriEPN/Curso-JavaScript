// Maps
let cliente = new Map();
console.log(cliente);

cliente.set('nombre','Francis');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);
console.log(cliente);

// Aceeder a los valores
console.log(cliente.get("nombre"));
console.log(cliente.get("tipo"));
console.log(cliente.get("saldo"));

// Metodos para maps
console.log(cliente.size);
console.log(cliente.has("tipo"));
console.log(cliente.has("apellido"));

// Borrar un elemento del MAP
cliente.delete("nombre");
console.log(cliente.has("nombre"));
console.log(cliente.size);

// Limpiar el MAP
cliente.clear();
console.log(cliente);

// Poner valores predetyerminados en el MAP
const paciente = new Map(
    [["nombre", "paciente"],
    ["habitacion", "No definido"]
    ]
);

console.log(paciente);
paciente.set("nombre","Antonio");
console.log(paciente);
paciente.set("habitacion",400);
paciente.set("habitacion",500);
console.log(paciente);

// Recorrer con forEach
// Obtiene los valores directamente
paciente.forEach(datos => {
    console.log(datos);
    
});

// Obtiene tambien el nombre de la llave 
// Obtiene los valores directamente
paciente.forEach((dato, index) => {
    console.log(`Llave:${index} - Dato:${dato}`);
    
});