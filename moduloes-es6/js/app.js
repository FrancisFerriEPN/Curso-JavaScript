import {nombre_cliente, ahorro, mostrar_informacion, Cliente} from './cliente.js';
// Usa el comodin solo para cuando vas a usar todo de lo contrario haces lento el programa
import * as cliente from './cliente.js';
console.log(nombre_cliente);
console.log(ahorro);
console.log(cliente);
console.log(cliente.nombre_cliente);
console.log(cliente.ahorro);
const info = mostrar_informacion(nombre_cliente, ahorro);
console.log(info);

// Utiolizar la clase
let nuevo_cliente = new Cliente(nombre_cliente,ahorro);
console.log(nuevo_cliente);
console.log(nuevo_cliente.mostrar_informacion());
let nuevo_cliente2 = new cliente.Cliente(cliente.nombre_cliente,cliente.ahorro);
console.log(nuevo_cliente2);