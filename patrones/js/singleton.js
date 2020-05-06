const alumnos = {
    lista_alumnos:[],

    // obtener un alumno
    get: function(id){
        console.log(id);
        return this.lista_alumnos[id];
    },

    // Crear un nuevo alumno
    crear: function(datos){
        console.log(datos);
        this.lista_alumnos.push(datos);
    },

    // listar alyumnos
    lstado: function(){
        return this.lista_alumnos;
    }
}
const info_alumno = {
    nombre: 'Juan',
    edad: 20
}

const info_alumno2 = {
    nombre:"Pablo",
    edad:21
}
alumnos.crear(info_alumno);
alumnos.crear(info_alumno2);
const listado = alumnos.lstado();
console.log(listado);

const alumno = alumnos.get(1);
console.log(alumno);