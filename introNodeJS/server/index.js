// Importar Expresss
const express = require("express");
const path = require("path");
const routes = require("./routes");
// Configurar Express
const app = express();

// Hablita rPug
app.set('view engine', 'pug');

// Añadir las vistas
app.set("views", path.join(__dirname,'./views'));

// use responde a todo, get responde uicamente a peticiones get
app.use("/", routes())
app.listen(3000);