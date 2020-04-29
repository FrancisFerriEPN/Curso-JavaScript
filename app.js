
// Existen estas dos formas
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;
console.log(exp1);
console.log(exp2);

let valor, exp_Reg;
exp_Reg = /[0-9]/;
valor = 1992;
// Probar expresion regular
console.log(exp_Reg.test(valor));
valor = "1992";
console.log(exp_Reg.test(valor));

valor = "Hola";
console.log(exp_Reg.test(valor));

// Validar una fecha ccon expresion regular 20-10-2020
valor = "20-10-2020";
exp_Reg = /\d\d-\d\d-\d\d\d\d/;
console.log(exp_Reg.test(valor));
valor = "Hola mundo";
console.log(exp_Reg.test(valor));

// Validar una hora 10:30
valor = "10:30";
exp_Reg = /\d\d:\d\d \D\D/;
console.log(exp_Reg.test(valor));
valor = "10:30 AM";
console.log(exp_Reg.test(valor));

valor = "10:30 PM";
console.log(exp_Reg.test(valor));

valor = "10:30 30";
console.log(exp_Reg.test(valor));

exp_Reg = /\d\d\d\d/;
valor = "hola mundo";
console.log(exp_Reg.test(valor));
valor = "hola";
console.log(exp_Reg.test(valor));
valor = "1234";
console.log(exp_Reg.test(valor));
exp_Reg = /\d+/;
console.log(exp_Reg.test(valor));
