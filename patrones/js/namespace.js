const restaur_app = {};
restaur_app.platillos = [
    {
        platillo: "Pizza",
        precio:25
    },
    {
        platillo: "Hamburguesa",
        precio:20
    },
    {
        platillo: "Hot Dog",
        precio:15
    },

];

// Funcions
restaur_app.funciones = {
    ordenar: id => {
        console.log(`
        Tu platillo: ${restaur_app.platillos[id].platillo} Se esta preparando
        `);
    },
    agregar_platillo: (platillo, precio) => {

        //<<<
        //Interesante manera de declara un platillo
        const nuevo = {
            platillo,
            precio
        }
        //>>>

        restaur_app.platillos.push(nuevo);
    },
    mostrar_menu: platillos => {
        console.log(`Bienvenido a nuestro menu `);
        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio} `);
        });
    }
};


console.log(restaur_app);
restaur_app.funciones.ordenar(2);
const {platillos} = restaur_app;
restaur_app.funciones.mostrar_menu(platillos);
restaur_app.funciones.ordenar(0);

restaur_app.funciones.agregar_platillo("Pastel", 15);
restaur_app.funciones.mostrar_menu(platillos);