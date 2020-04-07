// Para ECMAScript 6
class Cliente{
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this. apellido = apellido;
        this.saldo = saldo;
    }

    // Cualquier metodo que se agregue va a ser parte del protp
    imprimir_saldo(){
        return `Holas ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    tipo_cliente(){
        let tipo;
        if (this.saldo > 10000){
            tipo = "Gold";
        } else if (this.saldo > 5000){
            tipo = "Platinum";
        } else {
            tipo = "Normal";
        }
        return tipo;
    }

    retirar_saldo (monto){
        return this.saldo -= monto;
    }

    // Los metodos estaticos sirven para no tener que instanciar un objeto. Se puede acceder a los metodods desde la clase
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const maria = new Cliente("Maria", "Peréz",11000);
console.log(maria);
console.log(maria.imprimir_saldo());
console.log(maria.tipo_cliente());
console.log(maria.retirar_saldo(30));
console.log(Cliente.bienvenida());