
// Forma vieja
// Destructuring forma anterior
function reservacion(completo, opciones){
    let {metodo_pago, cantidad, dias} = opciones;
 /* 
    
    //<<<
    // Se obtiene las opciones o un objeto
    opciones = opciones || {};
    //>>>
    console.log(opciones);


    let metodo_pago = opciones.metodo_pago,
        cantidad = opciones.cantidad,
        dias = opciones.dias; */

    console.log(metodo_pago);
    console.log(cantidad);
    console.log(dias);
    
}

//
reservacion(
    true, {
        metodo_pago:"trajetaa de credito",
        /* La funcion obtiene undefinied
        cantidad: 2000,
        dias:3
        */
       cantidad: 2000,
       dias:3
    }
);


// Nueva forma
function reservacion2(completo,
        {
        metodo_pago = "efectivo",
        cantidad = 0,
        dias = 0
        } = {}
    ) 
    {
        // El uerpo de la funcion empieza aqui
        if (completo){
            console.log("Proceder a reservar");
            
        } else {
            console.log("Abandonar");
        }
        console.log(metodo_pago);
        console.log(cantidad);
        console.log(dias);
}

//
reservacion2(
    false
);

reservacion2(
    false, {}
);

reservacion2(
    true, 
    {
        metodo_pago: "tarjeta",
        cantidad:5000,
        dias:5
    }
);
