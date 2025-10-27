/****************************************
********INSTRUCCIONES DE SALIDA**********
*****************************************/


//1ª opción: método del objeto window
window.alert ("Usando el método alert()");
alert (3*5);
//Pidiendo confirmación al usuario. Se puede omitir el objeto
window.confirm ("Desea confirmar la transacción??");

//2ª opción: escribe sobre el HTML --> NO recomendable
document.write ("<h2>Natalia Escrivá</h2>");
document.write ("<h2>8/2</h2>");

//3ª opción: método que actúa sobre el elemento con identificador
document.getElementById("OtroParrafo").innerHTML = "Cambiamos párrafo";
document.getElementById("UltimParrafo").innerHTML = 5/3;

//4ª opción: solo se ve en la consola del navegador
console.log("Texto visible en la consola");
console.log(2+2); 

//5ª opción: le pedimos datos al usuario
const nombre = prompt ("Indica un nombre para poder dirigirnos a tí: ");
alert ("Para nosotros eres " + nombre);
const mayorEdad = prompt ("Indica tu edad", 18);





