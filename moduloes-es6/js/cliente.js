export const nombre_cliente = "Juan";
export let ahorro = 200;

// Exportar funciones
export function mostrar_informacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

// Exportar u7na clase
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrar_informacion(){
    return `Cliente: ${this.nombre} - Ahorro ${this.ahorro}`;
    }
}