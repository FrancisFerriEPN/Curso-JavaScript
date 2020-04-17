// Async Await
async function obtener_clientes(){
    const cliientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Clientes descargados...');
        },2000);
    });
    // error o no
    const error = true;
    if(!error){
        // Espera a que se cumpla el promise
        const respuesta = await cliientes;
        return respuesta;
    } else {
        await Promise.reject("Hubo un error...");
    }
}

obtener_clientes()
    .then(res => console.log(res))
    .catch(error => console.log(error));
