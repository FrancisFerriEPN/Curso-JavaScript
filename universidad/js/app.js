/*
const enlaces = document.querySelectorAll(".enlace");
console.log(enlaces[0].parentElement.parentElement.parentElement);
// Usa element no Node

const cursos = document.querySelectorAll(".card");
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = "Que mas wey");
*/
const enlaces = document.querySelectorAll(".enlace");
// Los siblings son ls que estan al mismo nivel
console.log(enlaces[4].previousElementSibling.previousElementSibling);
// Utiliza siempre Elements no Nodos
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]);