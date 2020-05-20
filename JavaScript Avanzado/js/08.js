// Composicion
const obtener_nombre = (info) =>({
    mostrar_nombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});
function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    };

    return Object.assign(
        info,
        obtener_nombre(info)
    );
}
function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtener_nombre(info)
    );
}
const cliente = Cliente("Juan");
cliente.mostrar_nombre();
const empleado = Empleado("Pedro");
empleado.mostrar_nombre();