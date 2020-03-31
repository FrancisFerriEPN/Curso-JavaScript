// Get eleent by id
//let elemento;

//elemento = document.getElementById('header').className;
let encabezado;
// para obtener el texto
encabezado = document.getElementById('encabezado').textContent;
encabezado = document.getElementById('encabezado').innerText;
// Para cambiar el estilo en pocas se pude modifiar el css desde JAvaScript
encabezado = document.getElementById("encabezado");
encabezado.style.background = "#333";
encabezado.style.color = "#fff";
encabezado.style.padding = '20px';
// Cambiar texto
encabezado.textContent = "Aprovecha el curso mi rey";
encabezado.innerText = "Aprovecha el curso mi rey";
console.log(encabezado.innerText);