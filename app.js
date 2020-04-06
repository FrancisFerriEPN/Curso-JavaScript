function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Prototipo que imprime saldo y nombre
Cliente.prototype.nombre_saldo_cliente = function () {
    return `Nombre: ${this.nombre}, tu saldo es de: ${this.saldo}`;
}

const cliente1 = new Cliente("Francis",200);
// Protoipo que imprime saldo y nombre
// Aqui si aparece el metodo en el proto
console.log(cliente1);

// Baca para empresas
function Empresa(nombre, saldo, telefono, tipo){
    // Heredar de clases
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

const empresa = new Empresa('Udemy', 2000000, 12000000, "Educacion");
// Aqui no aparece el metodo en el prototype
console.log(empresa);

// Hay que heredar el prototipo
Empresa.prototype = Object.create(Cliente.prototype);

const empresa2 = new Empresa('Coursera', 3000000, 44000000, "Educacion");
console.log(empresa2);
console.log(empresa2.nombre_saldo_cliente());