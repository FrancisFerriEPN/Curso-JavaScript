// Herencia via prototype
// Clases y prototipes
function Playlist(nombre){
    this.nombre = nombre;
}

Playlist.prototype.play = function () {
    console.log(`Reproduccioendo la Playlist ${this.nombre}`);
}

Playlist.prototype.eliminar = function () {
    console.log(`Eliminando la Playlist ${this.nombre}`);
}

// Hewrencia
function Cancion(nombre, genero) {
    Playlist.call(this, nombre);
    this.genero = genero;
}

//<<<
// Heredar los metodos metodos via prototypes
Cancion.prototype = Object.create(Playlist.prototype);
//>>>

const cancion = new Cancion("Nothing else matters", "heavy Metal");
const playlist = new Playlist("Rock 90s");

cancion.play();
playlist.play();