const cliente = {
    nombre: "Alejandra",
    tipo : "Premium"
}

// Forma tipica
let nombre = cliente.nombre,
    tipo = cliente.tipo;
nombre = "Pedro";
tipo = "Gold";


// nueva forma
// Gracias a esta notacion se evita lo avalores anteriores
({nombre, tipo} = cliente);
console.log(nombre);
console.log(tipo);

//
const cliente1 = {
    tipo:"Premium",
    nombre:"Antonio",
    datos:{
        ubicacion:{
            ciudad:"Jalisco",
            pais: "Mexico"
        },
        cuenta: {
            desde: "10-12-2012",
            saldo: 4000
        }
    }
};
let {datos: {ubicacion}} = cliente1;
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);


let {datos: {cuenta}} = cliente1;
console.log(cuenta.desde);
console.log(cuenta.saldo);

//
const cliente3 = {
    nombre:"Pedro",
    tipo:"Premium",
};

({nombre, tipo="Basico", saldo=0} = cliente3);
console.log(nombre);
console.log(tipo);
console.log(saldo);