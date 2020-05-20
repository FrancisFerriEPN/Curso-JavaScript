// JavaScript Evento Loop
console.log("Yo me mostrare primero");

// SetTimeOut es nion blocking  no se va a colocar en el Stack
setTimeout(function() {    
    console.log("Yo me mostrare segundo");
}, 0)

console.log("Yo me mostrare tercero");

setTimeout(function () {
    console.log("Yo me mostrare cuarto");
},0);

console.log("Yo me mostrare quito");
// Es stack se ejecuta primero y luego comienza a ejecutarse lo del Quebe

// Job Quebe se ejecuta antes que task Quebe, es decir primero se ejecuta el Promise antes que el setTimeOut
new Promise(function(res) {
    res('Yo soy un promise')
}).then(console.log);