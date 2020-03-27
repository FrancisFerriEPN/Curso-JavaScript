// Crear objetos
// Para crear un objeto se utiliza llaves
const persona = {
    nombre : "Miguel",
    apellido: "Martines",
    profesion: "diseñadr grafico",
    email: "miguel.martinez@gmail.com",
    edad: 20,
    musica: ["Thrash","Rock","Grunch"],
    // Objeto dentr de tro objeto
    hogar : {
        ciudad: "Quito",
        pais: "Ecuador"
    },
    // Tiene la siguente manera para crear metodos
    nacimiento : function() {
        // Se utiliza la palabra this para referirse a los atributs del objeto
            return new Date().getFullYear() - this.edad;
    }
};
console.log(persona);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.musica[1]);
persona.musica.push('Alternativo');
console.log(persona.musica);
console.log(persona.hogar.ciudad);

// Existe ottra frma de acceder aos valores del objeto, n tan recomendada
console.log(persona['hogar']["pais"]);
// No te olvides de los parentesis
console.log(persona.nacimiento());