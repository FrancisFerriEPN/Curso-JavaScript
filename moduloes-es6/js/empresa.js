export const nombre_empresa = "Udemy";
export let ahorro = 20000000;
export const categoria = "Aprendizaje";

// Exportar funciones
export function mostrar_informacion(nombre, ahorro, categoria){
    return `Cliente: ${nombre} - Ahorro ${ahorro} - Categoria: ${categoria}`;
}
