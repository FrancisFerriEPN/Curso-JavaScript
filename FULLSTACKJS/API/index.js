const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

// Crear el servidor
const app = express();

const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin : (origin, callback) => {
        //console.log(origin);
        const existe = whitelist.some(dominio => dominio === origin);
        if (existe){
            callback(null, tue)
        } else {
            callback(new Error("No Permitido por CORS"))
        }

    }
}
// Habilitar cors
//app.use(cors(corsOptions));
app.use(cors());

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinaria",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// Habilitar el body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//habilitaar routing
app.use("/", routes())

// puerto y arrancar el servidor
app.listen(4000, () =>{
    console.log("Servidor funcionando");
});
