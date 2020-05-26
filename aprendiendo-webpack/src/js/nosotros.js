import '../css/style.scss';
const cliente2 = (nombre_cliente) => nombre_cliente;
class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const cliente = new Cliente('Juan');
console.log(cliente);

console.log("Desde Nosotros");