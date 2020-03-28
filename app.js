// Funciones que se declaran e invcar inmediatamente
// IIFE
// (funcion)();
(function(){
    console.log('Creand un IIFE');
})();


(function(tecnolgia){
    console.log(`Aprendiendo ${tecnolgia}`);
})("JavaScript");

// Metodos de propiedad
// Metdo = funcion dentro de un bjeto
const musica = {
    reproducir : function(id) {
        console.log(`Reproduciendo cancion ID ${id}`);
    },
    pausar: function(){
        console.log("Pause a la musica");
    }
}
musica.reproducir(30);
musica.pausar();

// Los metdos tambien pueden gruardarse o crearse fuera del objeto
musica.borrar = function(id){
    console.log(`Se borro la cancion con el ID ${id}`)
}
musica.borrar(2);