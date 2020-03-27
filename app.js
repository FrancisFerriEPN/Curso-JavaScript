// Arregl de bjets
const autos = [
    {modelo :"Camaro", motor : 3.5},
    {modelo :"Yaris", motor : 4.0},
    {modelo :"Spark", motor : 4.2}
];
console.log(autos);
console.log(autos[1].modelo);

console.log(autos.length);
 for(let i=0; i<autos.length; i++){
     //console.log(autos[i]);
     console.log(`${autos[i].modelo} ${autos[i].motor}`)
 }
 autos[0].modelo = 'Audi';
 console.log(autos);
 // Con const no se puede vlver a asigar todo, pero con let si, ambos se puede reasignar valor por valor