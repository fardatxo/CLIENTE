/*--------------------------------------------------------------
-----Function Declaration y Expression (funciones anónimas)-----
-------------------------------------------------------------- */

//Declaración de función (Function declaration)
console.log("------------Function declaration------");
function saludo(){
   console.log("Hola");
}
saludo(); //invocamos la funcion

//Función con parámetros y resultado
function suma(a, b){
    return a+b;
}
console.log(suma(7, 4)); 
const result = suma(10,20);
console.log(result);//30
console.log(`El resultado es: ${suma(2,3)}`) //Otra forma de invocarla
console.log("El resultado es: " + suma(1,2)) //Otra forma de invocarla


//Expresión de función (Function Expression)
//funciones anónimas --> NO tienen identificador, se asignan a variables
console.log("------------Function Expression o Funciones anónimas------");
const despedida = function(){
    console.log("Adiós");
}
despedida();

//Otro ejemplo
const triple = function(x){
    return 3*x;
}
//invocamos la función
const b = prompt("Indica un número para obtener su triple");
console.log (`El triple de ${b} es: ${triple(b)}`);

//Creamos una función anónima con el CONSTRUCTOR FUNCTION
const producto = new Function ("i", "j", "return i*j");
const resulProducto = producto(3,5); 
console.log(resulProducto);
console.log("4 x 8 son " + producto(4,8)); //invocamos la función directamente 


//asignamos el resultado de funciones a variables
const resultSaludo = saludo(); //recoge la acción, el alert
const resultSaludo2 = saludo; //recoge el código de la función
console.log(resultSaludo2); 
const resultSuma = suma(12, 8); //recoge el resultado del código
console.log("El resultado de la suma es: " + resultSuma);
console.log(suma); //Muestra el código de la función


/*--------------------------------------------------------------
-----------------------------HOISTING---------------------------
-------------------------------------------------------------- */
/*
restar(5,10);
function restar(num1, num2){
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
}

miNombre("Natalia");
const miNombre = function(nom){
    console.log(`Te llamas ${nom}`);
}

*/

/*--------------------------------------------------------------
--------------------Funciones autoinvocadas--------------------
-------------------------------------------------------------- */
console.log("-----Funciones autoinvocadas-----");
//funciones INVOCADAS AUTOMÁTICAMENTE O AUTOINVOCADAS
//Recordamos los paréntesis generales en encierran todo el código y los finales
(function prueba(){
    console.log("Esta función se ha invocado automáticamente!!!!!");
}());

