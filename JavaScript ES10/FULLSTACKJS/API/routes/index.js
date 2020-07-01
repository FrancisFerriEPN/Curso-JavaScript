const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteControllers")

module.exports = function(){
    
    // Agrega nuevos pacientes via post
    router.post("/pacientes",
        pacienteController.nuevoCLientte
    )
    
    return router;
}