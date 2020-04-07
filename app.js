// Para ECMAScript 6
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Cualquier metodo que se agregue va a ser parte del protp
    imprimir_saldo(){
        return `Holas ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){
        // Se asignan en el constructor padre, de esta manera se hereda las clases
        super(nombre,saldo); 
        this.telefono = telefono;
        this.tipo = tipo;
    }

    // Se resscibe el metodo de una manera muy facil solo se lo vuelve a escribir
    static bienvenida(){
        return `Bienvenido al cajero para empresas`;
    }
}

const empresa = new Empresa("Empresa1",10000,12322432,"Construccion");
console.log(empresa);

// hereda todos los metodos
console.log(empresa.imprimir_saldo());

const cliente = new Cliente("Paco", 2000);
console.log(cliente.imprimir_saldo());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());