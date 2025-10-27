/**************************************
******EST. CONTROL DE ITERACIÓN********
***************************************/


/**************************************
 ****************FOR*******************
*************************************/
/*
console.log("********FOR*****************");
let i;
//Con las tres expresiones
for (i = 1; i < 10; i+=2){
   console.log (i); 
}

//eliminamos la primera expresión
i = 1;
for (; i < 10; i++){
    console.log (i); 
 }

//eliminamos la condición
for (i = 1; ;i++){
    if (i < 10){
        console.log (i); 
    } else {
        break;//para salir del bucle
    }
 }

//Eliminamos la última expresión
for (i = 1; i < 10;){
    console.log (i); 
    i++;
 }

//Utilizamos dos o más valores dentro del bucle
let y, z;
for (y=1, z=5; y<6, z>=1; y++, z--){
    console.log("y vale " + y+ " y z vale "+z);
}

//Uso de bucles anidados
let m, n;
for (m=0; m<4; m++){
    for (n=3; n>0 ; n--){
        console.log ("m= " + m + " y n= " + n);
    }
}

/*
console.log("********FOR IN*************");
//Bucle for..in
const alumno = {nombre:"Natalia", nia:"XXXXXXXX", ciclo:"DAW", curso:"2"};
let info;
for (info in alumno){
    console.log (`${info}: ${alumno[info]}`);
}
*/
/**************************************
 ***********BREAK/CONTINUE************
*************************************/

console.log("***BREAK*********");
//BREAK --> Sale del bucle
//queremos que pare cuando llegue al 5
for (let i=0; i<=10; i++){
    if (i === 5){
        console.log("Este es el 5");
        break;
    }
    console.log(`Número: ${i}`);
}
console.log("*******CONTINUE*********");
//CONTINUE --> identifica un elemento y continua
//queremos que el número 5 aparezca con letras
for (let i=0; i<=10; i++){
    if (i === 5){
        console.log("Número: CINCO");
        continue;
    }
    console.log(`Número: ${i}`);
}


let x=0;
for (i=1; ; i++){
    x = parseInt(Math.random()*11);
    console.log(x);
    if (x == 2){
        console.log ("j vale 2, lo saltamos....");
        continue;
    } else if (x == 8){
        console.log ("x vale 8, el bucle no seguirá ejecutándose....");
        break;
   
    } 
}

//Break con etiquetas
//creamos un array...
let mascotas = ["perro", "gato", "hamster"];
//creamos la etiqueta...
ver_mascotas:
{
    console.log(mascotas[0]);
    console.log(mascotas[1]);
    break ver_mascotas;
    console.log(mascotas[2]);
}

//Continue con etiquetas (opcional)
let j=0;
//creamos la etiqueta...
bucle:
    for (j=0; j<10; j++){
        if(j == 3 || j == 5){
            console.log ("El número es un 3 o un 5, continuamos...");
            continue bucle;
        }
        console.log(j);
    }

