
// Existen estas dos formas
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

let valor, exp_Reg;
exp_Reg = /[0-9]/;
valor = 1992;
// Probar expresion regular
valor = "1992";

valor = "Hola";

// Validar una fecha ccon expresion regular 20-10-2020
valor = "20-10-2020";
exp_Reg = /\d\d-\d\d-\d\d\d\d/;

valor = "Hola mundo";

// Validar una hora 10:30
valor = "10:30";
exp_Reg = /\d\d:\d\d \D\D/;

valor = "10:30 AM";

valor = "10:30 PM";

valor = "10:30 30";
exp_Reg = /\d\d\d\d/;

exp_Reg = /\d+/;
// Expresion regular que acepta todo lo contrario ^
exp_Reg = /[^0-9]/;
valor = "Hola";

// Parte 2
exp_Reg = /\d{1,2}-\d{1,2}-\d{1,4}/;
valor = "20-10-2020";
valor = "1-1-2018";
valor = "1-100-2018";
valor ="10-10-203";
console.log(exp_Reg.test(valor));

// Evaluar letras o numeros
exp_Reg = /\w+/;
valor = "Mensaje de prueba";
valor = 1234;
valor = " ";
console.log(exp_Reg.test(valor));

// Revisar que sean puros numeros

exp_Reg =/\d+/;
valor = 1234;
valor  = "hola";
console.log(exp_Reg.test(valor));

exp_Reg = /([0-9])\w+/;
valor = 1234;
valor = "Hola MUNDO";
console.log(exp_Reg.test(valor));

// Revisar que un texto sean puras mayusculas
exp_Reg = /([A-Z])\w+/;
valor = "hola mundo";
valor = 1234;
valor ="MENSAJE EN MAYUSCULAS";
console.log(exp_Reg.test(valor));

// Revisar que un texto sean puras minusculas
exp_Reg = /([a-z])\w+/;
valor = 1234;
valor ="MENSAJE EN MAYUSCULAS";
valor = "hola mundo";
console.log(exp_Reg.test(valor));

const exp_Reg_mail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let email = "francis99@gmail.com";
//email = "francis99gmail.com";
console.log(exp_Reg_mail.test(email));
