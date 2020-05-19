function sumar(a, b) {
    //Sumar dos numeros
    return a +b;
}
console.log(sumar.toString());

function Automovil(modelo, color){
    this.modelo = modelo;
    this.color = color;
}


// Para cambiar el toSring debes irte al proto
Automovil.prototype.toString = function autoString(){
    const datos = `Auto: ${this.modelo} y color ${this.color}`;
    return datos;
}
const auto = new Automovil("Camaro", "Negro");
console.log(auto.toString());
