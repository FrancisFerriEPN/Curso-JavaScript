let cp;
cp = 90123
cp = String(cp);
console.log(typeof cp);
console.log(cp.length);

let dato;
dato = 4 + 4;
dato = '4' + '4';
console.log(dato);
console.log(dato.length);

// Con arreglos pone tdo en una sola string
dato = String([1,2,3]);
console.log(dato); // "1,2,3"

// toString
dato = 20;
dato = dato.toString();
console.log(dato);
dato = [1,2,3];
dato = dato.toString();// "1,2,3"
console.log(dato);