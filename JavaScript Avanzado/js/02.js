// This con explicit binding
function persona(el1, el2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y ${el2}`);
}
const informacion = {
    nombre: "Juan",
    trabajo: 'Proramador'
}
persona(informacion);
persona.call(informacion);

// Call existe en todas las funciones y permite establecer un contexo

const generos_musicales = ["Heavy metal", "Rock"];

//  Con call y el explicit binding se debe pasar uno por uno klos argumentos
// Cyuando pasas arreglo debes colocar todas las posiciones
persona.call(informacion, generos_musicales[0], generos_musicales[1]);

// Con binding apply si puedes pasar el arreglo completo
persona.apply(informacion,generos_musicales);

// Explicit binding .bind
// Te crea una nueva funcion que debes llamar  para usar
const nueva_fn = persona.bind(informacion, generos_musicales[0], generos_musicales[1]);

nueva_fn();

