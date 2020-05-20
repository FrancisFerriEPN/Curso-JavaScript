function obtener_auto() {
    console.log(`Mi auto es color ${this.color}`);
}

const color = "Negro"; // undefined

// Si no encuenta explicitamente ni explicitamente lo busca en el window
window.color = "Negro"; // Color Negro
obtener_auto();