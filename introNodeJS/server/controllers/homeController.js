const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

exports.consultasHomePage = (req, res) => {
    //<<<
    // MUY IMPORTANTE
    const promises = [];
    promises.push( Viaje.findAll({
            limit: 3
    }))

    promises.push( Testimonial.findAll({
        limit: 3
    }))
   
    // Pasar el promise y ejcutarlo
    const resultado = Promise.all(promises);

    resultado.then( resultado => res.render("index", {
        pagina: "Proximos Viajes",
        clase: "home",
        viajes : resultado[0],
        testimoniales: resultado[1]
    }))
    .catch(error => console.log(error))
    //>>>
}