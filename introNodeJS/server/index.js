// Importar Expresss
const express = require("express");
const path = require("path");
const routes = require("./routes");

const configs = require('./config');


// Configurar Express
const app = express();

// Hablita Pug
app.set('view engine', 'pug');

// Añadir las vistas
app.set("views", path.join(__dirname,'./views'));

// Cargar una carpeta estatica llamada public
app.use(express.static("public"))

// validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')];

// creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

// Muestra el año actual
app.use((req, res, next) =>{
    // Crear una nueva fecha
    const fecha = new Date();
    res.locals.fecha_actual=fecha.getFullYear();
    return next();
})

// use responde a todo, get responde uicamente a peticiones get
app.use("/", routes());
app.listen(3000);