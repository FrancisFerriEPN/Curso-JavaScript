export function calcular_total(cantidad, plazo){
    // Cantidades
    // 0 -1000 = 25%
    // 1001 - 5000 = 20%
    // 5001 - 10000 = 15%
    // +10000 = 10%

    let total_cantidad;
    if(cantidad <= 1000){
        total_cantidad = cantidad * .25;
    }else if(cantidad > 1000 && cantidad <= 5000){
        total_cantidad = cantidad * .20;
    }else if(cantidad > 5000 && cantidad <= 10000){
        total_cantidad = cantidad * .15;
    } else {
        total_cantidad = cantidad * .10;
    }

    // Calcular el plazo
    // Cantidades
    // 3 = 5%
    // 6 = 10%
    // 12 = 15%
    // 24 = 20%
    let total_plazo = 0;
    switch (plazo){
        case 3:
            total_plazo = cantidad * .05;
            break;
        case 6:
            total_plazo = cantidad * .10;
            break;
        case 12:
            total_plazo = cantidad * .15;
            break;
        case 24:
            total_plazo = cantidad * .20;
            break;
        default:
            break;
    }
    return total_plazo + total_cantidad + cantidad;
}