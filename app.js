const url = "https://jsonplaceholder.typicode.com/todos";

async function leer_todos(){
    // ESperar la respuesta
    const respuesta = await fetch (url);

    // Procede cuando la respuesta este hecha
    const datos = await respuesta.json();
    return datos;
}

// Muestra un promise
console.log(leer_todos());

leer_todos()
    .then(usurios => console.log(usurios));