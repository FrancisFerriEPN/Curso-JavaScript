let elemento;
elemento = document;
// Permite ver los elementos enlistados. Para ello debes dar clic en la flechiita e console
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
// Este regresa la la IP
elemento = document.domain;
// Este nos regresa la url es decir protocolo, IP , puerto, archvo actual
elemento = document.URL;
// UTF-8
elemento = document.characterSet;
// ACceder a lo formularios
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
// SI tuviera mas de una 
elemento = document.forms[0].classList;
// Array del total de imagenes
elemento = document.images;
elemento = document.images[2];
// Te regresa URL completa
elemento = document.images[2].src;
// Te regresa carpeta y nombre de archivo
elemento = document.images[2].getAttribute('src');

//Cuantos scripts tiene el documento
elemento = document.scripts;

elemento = document.images;
let imagenes = document.images;
// Con Array. form se puede comvertir cualquier cosa iterable a arreglo
let imagenes_array = Array.from(imagenes);
imagenes_array.forEach(function(imagen){
    console.log(imagen);
});
console.log(imagenes_array);