///Instanciar ambas clases
const eventBrite = new EventBrite();
const ui = new Interfaz();      

// Listener al buscador
document.getElementById("buscarBtn").addEventListener("click", (e) => {
    e.preventDefault();
    // leer el text del input buscar
    const texto_evento = document.getElementById("evento").value;
    const categorias = document.getElementById("listado-categorias");
    const categoria_seleccionada = categorias.options[categorias.selectedIndex].value;
    // Revisar que haya algo escrito en el buscador
    if (texto_evento === ""){
        console.log("No hay nada");
    } else {
        console.log("Buscando...");
        
    }
    
});