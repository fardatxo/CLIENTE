/**************************************
    2.2. Insertar código JS en HTML
 **************************************/
function saludo(){
    alert("Hola Mundo desde otro fichero!!");
}
saludo();

/**************************************
         4. Uso de console.time
 **************************************/
console.time("Prueba de tiempo de ejecución");

console.warn("Operación no permitida");
console.warn("Operación no permitida");
console.warn("Operación no permitida");
console.warn("Operación no permitida");
console.warn("Operación no permitida");
console.warn("Operación no permitida");
console.warn("Operación no permitida");

console.timeEnd("Prueba de tiempo de ejecución");