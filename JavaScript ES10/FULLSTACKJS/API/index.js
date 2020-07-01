const express = require("express");
const mongoose = require("mongoose");
const ruotes = require("./routes");
const routes = require("./routes");

// Crear el servidor
const app = express();

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinaria",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModift: false
})

//habilitaar routing
app.use("/", routes())

// puerto y arrancar el servidor
app.listen(4000, () =>{
    console.log("Servidor funcionando");
});
