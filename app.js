let i = 0;
while (i < 10){
    if (i ==5){
        console.log('Cinco');
        i++;
        continue;
        //break;
    }
    console.log(`Mumero: ${i}`);
    i++;
}

const musica = ['cancion1', 'cancion2', 'cancion3'];
i = 0;
while (i<musica.length){
    console.log(`Reproduciendo la cancion ${musica[i]}`);
    i++;
}

// ntra almens una vez
i = 0;
do{
    console.log(`Numero: ${i}`);
    i++;
}while(i < 10);