//EN JAvaScript no importa donde llames a la funcionn puede ser antes o desues de declararla
obtener_clientes();
function obtener_clientes(){
    console.log('Descargand...');
    // SIrve para pner un temporizador a  la ejecucion
    setTimeout(function(){
        console.log("Completo");
    },3000);    
}

obtener_clientes();

try {
    algo();
} catch (error){
    console.log(error);
    
} finally {
    console.log("No me importa ejecuta de tdos modos")
}