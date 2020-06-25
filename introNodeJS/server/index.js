// Importar Expresss
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");

const configs = require('./config');

require("dotenv").config({path: "variables.env"})

/* db.authenticate()
    .then(()=>console.log("DB Conectada"))
    .catch(error => console.log("Error")); */
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

// Muestra el año actualy genera la ruta
app.use((req, res, next) =>{
    // Crear una nueva fecha
    const fecha = new Date();
    res.locals.fecha_actual=fecha.getFullYear();
    res.locals.ruta = req.path;
    
    return next();
})

// ejecutamoe el bodyparser
app.use(bodyParser.urlencoded({extended: true}));

// use responde a todo, get responde uicamente a peticiones get
app.use("/", routes());

// Puerto y host para la app
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
    console.log("El servidor esta funcionando");
});