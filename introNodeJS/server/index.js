// Importar Expresss
const express = require("express");
const path = require("path");
const routes = require("./routes");
// Configurar Express
const app = express();

// Hablita Pug
app.set('view engine', 'pug');

// Añadir las vistas
app.set("views", path.join(__dirname,'./views'));

// Cargar una carpeta estatica llamada public
app.use(express.static("public"))

// use responde a todo, get responde uicamente a peticiones get
app.use("/", routes())
app.listen(3000);