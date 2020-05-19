try {
    throw new Error("Algo salio mas");
} catch (error) {
    console.log(error);
}

// Ahora puedes especificar el catch
try {
    throw new Error("Algo salio mas");
} catch {
    console.log("Hubo un error bastante grave...");
}