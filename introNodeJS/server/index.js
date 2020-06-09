// Importar Expresss
const express = require("express");
const routes = require("./routes");
// Configurar Express
const app = express();

// use responde a todo, get responde uicamente a peticiones get
app.use("/", routes())
app.listen(3000);