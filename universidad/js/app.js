
let enlaces = document.querySelectorAll("#principal .enlace");
enlaces[2].style.background = "red";
enlaces[2].textContent = "Nuevo enlace";
console.log(enlaces);

// Obtener enlaces con idice impar odd = impar
enlaces = document.querySelectorAll("#principal a:nth-child(odd)");
enlaces.forEach(function(impar){
    impar.style.background = "red";
    //impar.style.backgroundColor = "red"; // Es lo mismo que el de arriba
    impar.style.color = "white";
})
console.log(enlaces)