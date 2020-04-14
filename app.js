// Promises

// Devuelve resolve y reject
// Resolve se cumple el promise
// Reject no se cumple
const esperando = new Promise(function(resolve, reject){
    // el alor que se esta revisando no esta disponible en  el momento pero se espera a que este disponible en el futuro
    setTimeout(function(){
        resolve("Se ejecuto");
    },5000);// Aqui estamos simulando el tiempo
});

// Despues de 5 segundos el resultado sera correcto y va a ejecutar lo que este en then
esperando.then(function(mensaje){
    console.log(mensaje);
});

const aplicar_desuento = new Promise(function(resolve, reject){
    const descuento = false;
    if(descuento){
        resolve('Descuento aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
});

// Se utiliza cath direto, resulat muy interesante
aplicar_desuento.then(function(mensaje){
    console.log(mensaje);
}).catch(function(mensaje){
    console.log(mensaje);
    alert(mensaje);    
})