const express = require("express");
const router = express.Router();

module.exports = function () {
    router.get("/", (req, res) => {
        console.log(req);
        res.send("Inicio");
    });
    
    router.get("/nosotros", (req, res) => {
        console.log(req);
        res.send("Nosotros");
    });

    return router;
}