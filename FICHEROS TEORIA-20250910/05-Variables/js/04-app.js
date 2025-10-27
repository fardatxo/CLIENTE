
/***************************************
 *****DIFERENCIA ENTRE VAR Y LET*******
 ***************************************/
console.log("-----DIFERENCIAS LET y VAR-----")
//var SI permite la redeclaración
var a = 5; //esta variable se declaró en el fichero 01-app.js
console.log(a);
//let NO permite la redeclaración
//let rebajado = false; //esta variable se declaró en el fichero 01-app.js
console.log(rebajado);

console.log("----SCOPE con LET y VAR------");

/*En este caso variable2 NUNCA se mostrará y dará error porque
su invocación está fuera del bloque de su declaración */
function ambitoVariables(){
    let num = 7;
     if (num == 7){
         var variable1 = 1;
         let variable2 = 2;
     }
     console.log(variable1);
     //console.log(variable2); //DA ERROR!!   
 }
 ambitoVariables();
 


