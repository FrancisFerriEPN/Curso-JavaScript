// Composicion
const obtener_nombre = (info) =>({
    mostrar_nombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardar_email = (info) => ({
    email(email){
        console.log(`Guardando email en ${info.nombre}`);
        info.email = email;
    }
});

const obtener_email = (info) =>({
    mostrar_email(){
        console.log(`Correo: ${info.email}`);
    }
});

const obtener_empresa = (info) =>({
    mostrar_empresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtener_puesto = (info) =>({
    mostrar_puesto(){
        console.log(`Puesto: ${info.puesto}`);
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
        obtener_nombre(info),
        guardar_email(info),
        obtener_email(info),
        obtener_empresa(info)
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
        obtener_nombre(info),
        guardar_email(info),
        obtener_email(info),
        obtener_puesto(info)
    );
}
const cliente = Cliente("Juan", null, "Udemy");
cliente.mostrar_nombre();
cliente.email("cliente@cliente.com");
cliente.mostrar_email();
cliente.mostrar_empresa();

const empleado = Empleado("Pedro", null, "Programador");
empleado.mostrar_nombre();
empleado.email("empleado@empleado.com");
empleado.mostrar_email();
empleado.mostrar_puesto();