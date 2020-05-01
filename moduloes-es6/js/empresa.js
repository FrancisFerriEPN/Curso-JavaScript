import {Cliente} from './cliente.js';
// Exportar variables
export const nombre_empresa = "Udemy";
export let ahorro = 20000000;
export const categoria = "Aprendizaje";

// Exportar funciones
export function mostrar_informacion(nombre, ahorro, categoria){
    return `Cliente: ${nombre} - Ahorro ${ahorro} - Categoria: ${categoria}`;
}

// Utilizar la clase del modulo clientes
export class Empresa extends Cliente{
    constructor(nombre, ahorro){
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrar_informacion(){
        return `Cliente: ${this.nombre} - Ahorro ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}