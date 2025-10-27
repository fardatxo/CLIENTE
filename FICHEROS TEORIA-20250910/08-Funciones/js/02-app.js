/*--------------------------------------------------------------
----------------------Función y Método--------------------------
-------------------------------------------------------------- */
/*
const num1 = 20;
const num2 = "20";
console.log(parseInt(num2));//función
console.log(num1.toString());//método

*/

/*--------------------------------------------------------------
-------------------Parámetros y Argumentos-------------------------
-------------------------------------------------------------- */
console.log("----Parámetros y argumentos-----");
function suma(a, b){//a y b son parámetros
    return a+b;
}
console.log(suma(7, 4)); //7 y 4 son argumentos

/*-----------------------------------------------------------------------
----------------PARÁMETROS POR DEFECTO Y POR EXCESO----------------------
-----------------------------------------------------------------------*/
console.log("-----Parámetros por exceso y por defecto----");
function suma(a,b){
    return a + b;
}
console.log(suma(3)); //Devuelve NaN
console.log(suma (5,2,9)); //Usa los dos primeros

function concatena (x,y,z){
    console.log(x+y+z);
}
concatena("hola, ","soy "); //devuelve "hola soy undefined"
concatena("hola, ","soy ","Natalia", "Escrivá"); //devuelve "hola soy Natalia" 

/*----------------------------------------------------------------
-------------PARÁMETROS con valor por DEFECTO---------------------
-----------------------------------------------------------------*/
console.log("-----Parámetros con valor predeterminado----");
//ES5 --> debíamos hacer comprobaciones de los parámetros
function potencia (x,y){
    //Nos aseguramos de que tenemos y
    //if (y === "undefined"); y = 1;
    y = typeof y !== 'undefined' ? b : 1; 
    return x**y;
}
console.log(potencia(6));

//ES6 
function potencia2 (x,y=1){
    return x**y;
}
console.log(potencia(6));

/*----------------------------------------------------------------
-------------Número de parámetros no definido---------------------
-----------------------------------------------------------------*/

console.log("-----Número de parámetros NO definido-----");
//ES5 --> NUM PARÁMETROS NO DEFINIDO -->  Método arguments.length
function valores (){
    console.log("El número de argumentos es: " + arguments.length);
    for (let j=0; j<arguments.length; j++){
        console.log("argumento " + j +": "+ arguments[j]);
    }
}
valores(2,4,6,8,10);


function mascotas(a, b){
    console.log("a vale: " + a);
    console.log("b vale: " + b);
    console.log ("Todos los elementos: " , arguments);
    console.log("Esta lista tiene " + arguments.length);
}
mascotas("perro", "gato", "hámster", "tortuga", "pájaro");


//ES6 --> NUM PARÁMETROS NO DEFINIDO -->  Parámetros REST
function mascotas2(a, b,...otros){
    console.log("a vale: " + a);
    console.log("b vale: " + b);
    console.log(`Elementos del último parámetro: ${otros}`);
    console.log("El array del parámetro otros tiene " + otros.length + " elementos");   
}
mascotas2("perro", "gato", "hámster", "tortuga", "pájaro");

function miFuncion(x,y,...resto){
    console.log(`x = ${x}, y = ${y} y resto = ${resto}`);
    let total=0;
    for(let i in resto){
        console.log(resto[i]);
        total += i;
    }
    console.log("La suma del parámetro resto es: " + total);
}
miFuncion(1,2); //x=1, y=2, resto=array[]
miFuncion(1,2,3,4,5);
//x=1, y=2, resto=array[3,4,5]

//Ejemplo solo con parámetro REST
function media(...numeros){
    let acum = 0;
    for (let n of numeros){
        console.log(n); 
        acum = acum + n;
    }
    return acum/numeros.length; 
}
console.log(`La media es ${media(10,20)}`);
console.log(`La media es ${media(10,20,30)}`);
console.log(`La media es ${media(10,20,30,40)}`);


/*-----------------------------------------------------------------------
----------------PARÁMETROS: PASO POR VALOR Y REFERENCIA -----------------
------------------------------------------------------------------------*/
console.log("------Parámetros: paso por valor y referencia------");
//Paso por valor --> tipos básicos: bool, string, números
//Se crea una copia, NO se modifica el valor de la variable

const x = 2;
     y = 3;
let resul = 0;
function sumaDoble(h,j){
    h = h*2;
    j = j*2;
    return h + j;
}
resul = sumaDoble(x,y);

console.log(x); //Muestra 2
console.log(y); //Muestra 3
console.log(resul); //Muestra 10

//Paso por referencia --> tipos complejos: arrays, conjuntos....
//Se pasa el objeto, SI hay modificación de la variable
const array = [1, 2, 3, 4, 5];
function s(v){
    v[0] = 6;
}
console.log(array); //Muestra 1,2,3,4,5
s(array);
console.log(array);//Muestra 6,2,3,4,5








