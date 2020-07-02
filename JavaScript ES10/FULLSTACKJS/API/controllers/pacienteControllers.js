const Paciente = require("../models/Paciente")

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    console.log(req.body)
    // Crear objeto de paciente con datos de requiest. body
    const paciente = new Paciente(req.body);
    try {
        await paciente.save();
        res.json({mensaje: "El cliente se agrego correctamente"});
    } catch (error){
        console.log(error);
        next();
    }
}