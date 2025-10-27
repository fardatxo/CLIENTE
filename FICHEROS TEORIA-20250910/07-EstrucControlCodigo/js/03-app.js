/**************************************
 ****************WHILE****************
*************************************/

//While con contador
console.log("*****WHILE CON CONTADOR************");
let i = 100; //Inicializamos el contador
while (i <= 50) {
    console.log (i);  
    i+=10; //Incremento (permite que la condición sea falsa) 
}

console.log("*****DO...WHILE***********");
//Bucle do..while
i = 0;
do {
    console.log (i);
    i+=10;
} while (i <= 50);

console.log("*****WHILE CON CENTINELA*********");
//Bucle while con centinela
let salir = false; //centinela
let y;
//condición del centinela para iteración 
while (salir === false){
    //escribimos enteros aleatorios del 0 al 5
    y = parseInt(Math.random()*6);
    console.log(y);
    salir = (y%2==0);//centinela finaliza bucle
}

console.log("*****WHILE CON CONTADOR Y CENTINELA*********");
//Bucle while con contador y centinela
let sale = false; //centinela
let num = 0;
let cont = 1; //contador

while (sale == false && cont <= 6){
    num = parseInt(Math.random()*501);
    console.log (num);
    cont++; //incrementamos contador
    sale = (num % 2 == 0); //centinela finaliza
}


