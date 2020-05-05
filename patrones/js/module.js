const comprar_boleto = (function(){
    
    // privado
    let evento = "Conferencia JS 2020";
    let precio = 200;

    // publico
    return {
        mostar_boleto: function () {
            console.log(evento);
        },
        mostar_precio: function(){
            console.log(precio);
        }
    }
})();
comprar_boleto.mostar_boleto();
comprar_boleto.mostar_precio();