const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

/* for (let i = 0; i < autos.length; i++){
	if (autos[i].color === "Negro"){
		console.log(autos[i]);
	}
} */
//<<<
//console.table(autos);
//>>>

// forEach

/* autos.forEach( auto => console.log(auto)); */

/* let resultado = [];
autos.forEach( auto => {
	if (auto.color === "Rojo"){
		resultado.push[auto];
	}
});
console.log(resultado); */

// For no crea arreglos con return
/* let resultado = autos.forEach( auto => {
	return auto;
});
console.log(resultado); */

// map

// MAP permite crear arreglos con return 
// Es decir map te retorna un resultado

/* let resultado  = autos.map( auto => {
	return auto;
});
console.log(resultado);

resultado  = autos.map( auto => auto);
console.log(resultado);


//<<<
resultado  = autos.map( auto => {
	if(auto.marca === "BMW"){
		return auto;
	}
});
 */

/* 0: {marca: "BMW", modelo: "Serie 3", year: 2012, precio: 30000, puertas: 4, …}
1: undefined
2: undefined
3: undefined
4: {marca: "BMW", modelo: "Serie 5", year: 2016, precio: 70000, puertas: 4, …}
5: undefined
6: undefined
7: undefined
8: undefined */
//>>>
//console.log(resultado);

// filter
let resultado = autos.filter(auto => {
	return auto.marca === "BMW";
});

resultado = autos.filter(auto =>  auto.marca !== "BMW");

resultado = autos.filter(auto =>  auto.color === "Rojo");


resultado = autos.filter(auto =>  auto.year === 2018);

resultado = autos.filter(auto =>  auto.year > 2015);

resultado = autos.filter(auto =>  auto.precio > 50000);

resultado = autos.filter(auto =>  auto.puertas === 2);

resultado = autos.filter(auto =>  auto.transmision === "manual");

resultado = autos.filter(auto =>  auto.year >= 2015 && auto.year <= 2017);

resultado = autos.filter(auto =>  auto.year >= 2016 && auto.marca === "BMW");

console.log(resultado);

// find

// reduce

// some


