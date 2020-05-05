const comprar_boleto = (function(){
    
    // privado
    let evento = "Conferencia JS 2020";
    let precio = 200;

    //<<<
    const adquirir_boleto = () =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Creando un evento para ${evento}`;
        document.querySelector("#app").appendChild(elemento);
    }
    //>>>

    // publico
    return {

        //<<<
        mostar_boleto: function () {
            adquirir_boleto();
        },
        //>>>

        mostar_precio: function(){
            console.log(precio);
        }
    }
})();
comprar_boleto.mostar_boleto();
comprar_boleto.mostar_precio();