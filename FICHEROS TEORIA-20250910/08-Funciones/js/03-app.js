/*--------------------------------------------------------------
-----------------------ARROW Function----------------------
-------------------------------------------------------------- */
console.log("--------Arrow Function---------");
//FUNCTION ARROW --> Funciones flecha
//Ejemplo 1--> NO hay parámetros
const fraseAnonima = function(){
    return "Ejemplo Function Expression o Función Anónima";
}
console.log(fraseAnonima());
const fraseArrow = () =>"Transformando en Arrow function";
console.log(fraseArrow());
//Si el cuerpo de la función es una sola línea, podemos quitar las llaves
const ahora = ()=> new Date();
console.log (ahora());

//Solo un parámetro: podemos prescindir de los paréntesis del parámetro
const tripleAnonima = function(x){
    return 3*x;
}
console.log(`El triple de 20 es ${tripleAnonima(20)}`);
const tripleArrow = x => 3*x; 
console.log (`El triple de 100 es ${tripleArrow(100)}`); 

//Más de un parámetro, usamos paréntesis
const mediaAnonima = function(num1, num2, num3){
    return (`La media de los tres números introducidos es ${(num1 + num2 + num3)/3}`);
}
console.log(mediaAnonima(5, 10, 15));
const mediaArrow = (x,y,z)=>(`La media de los tres números introducidos es ${(x + y + z)/3}`);
console.log (mediaArrow(20,60,10));

//Podemos usar una expresión como en cualquier función
const saludoFlecha = mensaje=>console.log (mensaje);
saludoFlecha ("Buenas tardes a tod@s!!");

//Más de una sentencia, ponemos llaves
const factorial = n=>{
    let acum = 1;
    for (let i=n; i>0; i--){
        acum *= i; // => acum = acum*i
    }
    return acum;
}
let num = prompt ("Indica un número y se calculará su factorial");
console.log (factorial (num));




