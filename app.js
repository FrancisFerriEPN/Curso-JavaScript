// Object create
const Cliente = {
    imprimir_saldo: function(){
        return `hola ${this.nombre}, tu saldo es: ${this.saldo}`
    },
    retirar_saldo: function(retiro){
        return this.saldo -= retiro;
    }
}

// Crear ojeto
const mary = Object.create(Cliente);
// EL objeto esta vacio solo tiene metodos
console.log(mary);

// Le agregamos sus atributos
mary.nombre ="Mary";
mary.saldo = 2000;

console.log(mary);

console.log(mary.imprimir_saldo());
console.log(mary.retirar_saldo(500));