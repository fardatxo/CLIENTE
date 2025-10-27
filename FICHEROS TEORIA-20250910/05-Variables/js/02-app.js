"use strict";
/***************************************
 *****SCOPE O AMBITO DE LAS VARIABLES*******
 ***************************************/
console.log("-----SCOPE------");
//x, w e y son globales
var x = 3;
let y = 5;
w = 9;

nombre = "Natalia Escrivá";

function ambVar(){
    var x = 15; //local
    let z = 55; //local
   // w = 25;
    console.log ("x vale: " + x); // 15, valor local 
    console.log ("y vale: " + y); // 5, valor global
    console.log (z); // 55, local 
    console.log (nombre); 
    console.log ("w vale: " + w); //25, valor local
}

//console.log (w); // 9, global
ambVar();


/*Estas ejecuciones mostrarán las globales,
no tienen acceso a las variables locales*/
console.log (nombre);
console.log(x); //3
console.log (y);//5
//console.log (w); //vale 25, modificado valor variable global
//console.log (z); //da error, pq es local
