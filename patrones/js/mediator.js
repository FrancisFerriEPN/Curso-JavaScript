const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}
const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiwnte articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador} (Sonido de maso) `);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador) {
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

const Subasta = function() {
    let compradores = {};

    return {
        registrar: function(usuario){

            //<<< INteresante para utilizar llave valor en JSON
            compradores[usuario.nombre] = usuario;
            //>>>
            usuario.sala = this;
        }
    }
}

// Instancuiar los objetos
const juan = new Comprador("Juan");
const pepe = new Comprador("Pepe");
const paco = new Comprador("Paco");

const vendedor = new Vendedor("Vendedor");
const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(pepe);
subasta.registrar(paco);

vendedor.oferta("Mustang 1966",3000);
juan.oferta(3500, juan);
pepe.oferta(4000, pepe);
paco.oferta(4000, paco);
vendedor.vendido(paco.nombre);
