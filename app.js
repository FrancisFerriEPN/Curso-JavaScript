function Cliente(nombre,salldo){
    this.nombre = nombre;
    this.salldo = salldo;
}

// Permite guaradar  los metodos de manera segura dentro del prototipo del objeto
// Crear un prototype
Cliente.prototype.tipo_cliente = function(edad){
    let tipo;
    if(this.salldo > 1000){
        tipo = "Gold";
    } else if (this.salldo > 500){
        tipo = "Platino"
    } else {
        tipo = "Normal";
    }
    return tipo;
}

// Prototipo que imprime saldo y nombre
Cliente.prototype.nombre_saldo_cliente = function () {
    return `Nombre: ${this.nombre}, tu saldo es de: ${this.salldo}, Tipo cliente: ${this.tipo_cliente()} `;
}

// Retirar saldo
Cliente.prototype.retirar_saldo = function(retiro){
    return this.salldo -= retiro;
}

const cliente1 = new Cliente("Francis",200);
const cliente2 = new Cliente("Pedro",800);
const cliente3 = new Cliente("Alfonso",1200);
console.log(cliente1);

console.log(cliente1.tipo_cliente());
console.log(cliente2.tipo_cliente());
console.log(cliente3.tipo_cliente()); 

// Protoipo que imprime saldo y nombre
console.log(cliente1.nombre_saldo_cliente());
console.log(cliente2.nombre_saldo_cliente());
console.log(cliente3.nombre_saldo_cliente());


console.log(cliente2.retirar_saldo(300));