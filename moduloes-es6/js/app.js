import {nombre_cliente, ahorro, mostrar_informacion, Cliente} from './cliente.js';


//<<<
import { nombre_empresa, ahorro as ahorro_empresa, categoria, mostrar_informacion as mostrar_informacion_empresa, Empresa} from './empresa.js';
//>>>

console.log(nombre_cliente);
console.log(nombre_empresa);

console.log(ahorro);
console.log(ahorro_empresa);
console.log(categoria);

let empresa = new Empresa(nombre_empresa,ahorro_empresa,categoria);
console.log(empresa.mostrar_informacion());

const info = mostrar_informacion(nombre_cliente, ahorro);
console.log(info);
const info_empresa = mostrar_informacion_empresa(nombre_empresa, ahorro, categoria);
console.log(info_empresa);

