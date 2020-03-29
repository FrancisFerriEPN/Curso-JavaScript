// For loop
for (let i = 0; i <= 10;i++){   
    if(i == 5){
        console.log("Voy en el 5");
        continue;
        //break;
    }
    console.log(`Numero: ${i}`);
}

for (let i = 0; i <= 10;i++){   
    if(i % 2 == 0){
        console.log(`EL numero ${i} es par`);
    }else{
        console.log(`EL numero ${i} es impar`);
    }
}

const arreglo_productos = ['Camisa', 'Boleto', "Guitarra", "Disco"];
for(let i = 0; i < arreglo_productos.length; i++){
    console.log(`Tu producto ${arreglo_productos[i]} fue agregado`);
}