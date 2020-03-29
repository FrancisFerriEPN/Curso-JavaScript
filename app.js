let hora = 19;
// && y || 
if(hora >0 && hora <=24){
    if (hora  <= 10){
        console.log(`Buens dias`);
    }else if (hora <=18){
        console.log(`Buenas tardes`);
    } else {
        console.log(`Buenas noches`);
    }
} else {
    console.log(`Introduzca una hora valida`);
}

let puntaje = 100
// se interrumpe cuando entra en una categoria el else if
if(puntaje < 150) {
    console.log('Puntaje menor a 150');
} else if(puntaje < 200){ // Esta no se ejecuta
    console.log(`Puntaje <200`);
}