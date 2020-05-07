// Tambien se le conoce como subscriptor publicador
let observer = {
    obtener_ofertas: function(callback){

        //<<<
        if(typeof callback === "function"){
            this.subscribers[this.subscribers.length] = callback;
        }
        //>>>
    },
    cancelar_ofertas: function(callback){
        for(let i = 0; i < this.subscribers; i++){
            if (this.subscribers[i] === callback){
                
                //<<<
                delete this.subscribers[i];
                //>>>


            }
        }
    },
    
    publicar_oferta: function(oferta){
        for(let i = 0; i < this.subscribers; i++){
            if (typeof this.subscribers[i] === "function"){

                //<<<
                this.subscribers[i](oferta);
                //>>>

            }
        }
    },

    crear: function(objeto){
        for(i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

// Vendedores
const udemy = {
    nuevo_curso: function () {
        const curso = "Un nuevo curso de JavaScript!!!";
        this.publicar_oferta(curso);
    }
}
const facebook = {
    nuevo_anuncio: function () {
        const oferta = "Compra un celular";
        this.publicar_oferta(oferta);
    }
}


// Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);
