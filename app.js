// Object literal
const cliente = {
    nombre : 'Francis',
    saldo : 1200,
    tipo_cliente : function(){
        let tipo;
        // Sin this (saldo) da error
        if(this.saldo > 1000){
            tipo = "Gold";
        } else if (this.saldo > 500){
            tipo = "Platinum";
        }  else {
            tipo = "Normal";
        }
        return tipo;
    }
}
console.log(cliente.tipo_cliente());
console.log(cliente.saldo);

// Metodo alternativo
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipo_cliente =  function(edad){
        let tipo;
        // Sin this (saldo) da error
        if(this.saldo > 1000){
            tipo = "Gold";
        } else if (this.saldo > 500){
            tipo = "Platinum";
        }  else {
            tipo = "Normal";
        }
        return tipo;
    }
}
// Se crean on new como en Java
const persona = new Cliente("Francis", 300);
const persona2 = new Cliente("Karen", 6000);
console.log(persona);
console.log(persona.tipo_cliente());

console.log(persona2);
console.log(persona2.tipo_cliente());