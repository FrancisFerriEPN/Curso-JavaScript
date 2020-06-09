// Importar Expresss
const express = require("express");

// Configurar Express
const app = express();

// use responde a todo, get responde uicamente a peticiones get
app.get("/", (req, res) => {
    console.log(req);
    res.send("Hola Mundo en NodeJs");
});
app.listen(3000);