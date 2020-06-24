
const Testimonial = require("../models/Testimoniales");

exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render("testimoniales", {
        pagina: "Testimoniales",
        testimoniales
    })
}

exports.agregarTestimonial = async (req, res)=>{
        
    //<<< QUE BUENA MANERA DE REVISAR ERRORES
    // validar que todos los campos esten llenos
    let{nombre, correo, mensaje} = req.body;
    let errores = [];
    if (!nombre){
        errores.push('mensaje', "Agrega tu Nombre")
    }
    if (!correo){
        errores.push('mensaje', "Agrega tu Correo")
    }
    if (!mensaje){
        errores.push('mensaje', "Agrega tu Mensaje")
    }

    // revisar por errores
    if(errores.length > 0){

        // SE MANDA A RENDERIZAR LA VISTA Y SE LE PASA A TESTIMONIALES LAS VARIABLES
        // muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render("testimoniales", {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: "Testimonales",
            testimoniales
        })

    } else {
        // almacenarlo en la base de datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then (testimonial => res.redirect("/testimoniales"))
        .catch (error => console.log(error));

    }
}