// WeakSet
const weakSet = new WeakSet();

const cliente = {
	nombre: "Francis",
	saldo: 100
};
weakSet.add(cliente);

// const nombre = "Francis";
// weakSet.add(nombre);
console.log(weakSet.has(cliente));
console.log(weakSet.delete(cliente));

console.log(weakSet);
