const numero1 ="50", 
      numero2 = 10;

// Si se suma string con numerico concatena el valor a string
console.log(numero1 + numero2); //"5010"
// Es curioso pero con menos si resta por que no hay resta para strings
console.log(numero1 - numero2); //"5010"
// Number transforma a numero
console.log(Number(numero1) + numero2);
// parseInt
console.log(parseInt(numero1) + numero2);
console.log(typeof parseInt(numero1));

let dato;
dato = Number("20");
dato = Number("2.343454");
// Devuelvve 1
dato = Number(true);
// Devuele 0
dato = Number(false);
// Devuelve 0
dato = Number(null);

// parseFloat y parseInt
dato = parseInt("100");
// ParseInt cando tiene decimales devuelve el valor como floor solo conserva la parte entera en pocas, es logico
dato = parseInt("200.9");
// ParseFloat cuando tiene un entero sin decimales no agrega .00 conserva el valor exacto
dato = parseFloat("100");
dato = parseFloat("100.234");
console.log(dato);

// toFixed
dato =128.234567890;
// Sin decimales
console.log(dato.toFixed());
// Con decimales eliges tu
console.log(dato.toFixed(3));
dato ="123.445678678";
console.log(parseFloat(dato).toFixed(3));
console.log(parseInt(dato));
