import {nombre_cliente, ahorro, mostrar_informacion, mostar_nombre} from './cliente.js';

import * as cliente from './cliente.js';
console.log(nombre_cliente);
console.log(ahorro);
console.log(mostar_nombre(nombre_cliente));
console.log(cliente);
console.log(cliente.nombre_cliente);
console.log(cliente.ahorro);
const info = mostrar_informacion(nombre_cliente, ahorro);
console.log(info);