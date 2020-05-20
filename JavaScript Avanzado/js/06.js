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

const playlist = new Playlist("Rock 90s");
const playlist2 = new Playlist("Punk 90s");
console.log(playlist);
console.log(playlist2);

playlist.play();
playlist.eliminar();

playlist2.play();
playlist2.eliminar();