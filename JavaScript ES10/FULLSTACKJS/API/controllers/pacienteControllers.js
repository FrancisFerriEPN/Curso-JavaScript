

// Cuando se crea un nuevo cliente
exports.nuevoCLientte = (req, res, next) => {
    console.log(req.body);

    res.json({mensaje: "El cliente se agrego correctamente"});

}