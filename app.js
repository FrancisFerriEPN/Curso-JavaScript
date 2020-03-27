const producto1 = "pizza",
    precio1 = 30, 
    producto2 = "hambuerguesa",
    precio2 = 40;
let html;
/*
html = '<ul>' +
        '<li>Orden: ' + producto1 + '</li>' +
        '<li>Precio:  '+ precio1 + '</li>' +
        '<li>Orden: ' + producto2 + '</li>' +
        '<li>Precio:  '+ precio2 + '</li>' +
        '<li>Total:  '+ (precio1 + precio2 +) '</li>' +
        '</ul>';

console.log(html);
*/

html = `
        <ul>
        <li>Producto: ${producto1}</li>
        <li>Precio: ${precio1}</li>
        <li>Producto: ${producto2}</li>
        <li>Precio: ${precio2}</li>
        <li>Total: ${total(precio1, precio2)}</li>
        </ul>
        `

function total(precio1, precio2){
    return precio1 + precio2;
}
document.getElementById('app').innerHTML = html;