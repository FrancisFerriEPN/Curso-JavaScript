const express = require("express");
const router = express.Router();

const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

// COntroladores
const nosotrosController = require("../controllers/nosotrosController");
const homeController = require("../controllers/homeController");
module.exports = function () {
    router.get("/", homeController.consultasHomePage);
    
    router.get("/nosotros", nosotrosController.infoNosotros);
    
    router.get("/viajes", (req, res) => {
        Viaje.findAll()
        .then( viajes => res.render("viajes", {
            pagina: "Proximos Viajes",
            viajes
        }))
        .catch(error => console.log(error))
    });
    
    router.get("/viajes/:id", (req, res) => {
        Viaje.findByPk(req.params.id)
        .then(viaje => res.render("viaje", {
            viaje
        }))
        .catch (error => console.log(error));
    });
    
    router.get("/testimoniales", (req, res) => {
        Testimonial.findAll()
        .then(testimoniales => res.render("testimoniales", {
            pagina: "Testimoniales",
            testimoniales
        }))
    });

    // Cuando se llena el formulario
    router.post("/testimoniales",(req, res)=>{
        
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
            res.render("testimoniales", {
                errores,
                nombre,
                correo,
                mensaje
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

    })
    return router;
}