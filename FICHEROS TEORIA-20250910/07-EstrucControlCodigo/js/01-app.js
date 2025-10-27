/**************************************
******EST. CONTROL DE SELECCION********
***************************************/
/*
//IF
 function aprobado(){
    const nota = prompt ("¿Qué nota has sacado en el examen?");
    if (nota >= 5) {
      alert ("Has aprobado!!");
      return; //para detener la ejecución del if
  }
    if (nota < 5){
      alert("Has suspendido!!");
      return;
    }
}
aprobado();
*/

/**************************************
 ***********IF/ELSE***************
  *************************************/

//Función utilizando únicamente dos bloques de ejecuciones
//Solo se evalúa una condición --> if...else
/*
function aprobadoGeneral(){
    const nota = prompt ("¿Qué nota has sacado en el examen?");
    if (nota >= 5) {
        alert ("Has aprobado!!");
    } else {
        alert ("Has suspendido, suerte para la próxima!!");
    }
}
aprobadoGeneral();


//Función que evalúa distintas condiciones...  Anidación --> if...else...if
function aprobadoDetallado(){
    const nota = prompt ("¿Qué nota has sacado en el examen?");
    if (nota < 5) {
        alert ("Has suspendido, debes prepararte mejor");
    } else if ((nota >= 5) && (nota < 6)) {
        alert ("Has aprobado por los pelos!!");
    } else if ((nota >= 6) && (nota < 7)) {
        alert ("Has aprobado con un bien, no está mal!!");
    } else if ((nota >= 7) && (nota < 9)) {
        alert ("Has aprobado con un notable, vas bastante bien!!");
    } else if ((nota >= 9) && (nota <=10)) {
        alert ("Tienes un sobresaliente, enhorabuena!!");
    } 
}
aprobadoDetallado();
*/
/***********************************
***************SWITCH***************
*************************************/

//Sentencia switch --> Similar a la anidación

function aprobadoSwitchEnteros(){
    let nota = prompt ("¿Qué nota has sacado en el examen? (Sin decimales...)");
        nota = Number(nota);
                
    switch (nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            alert ("Has suspendido, debes prepararte mejor");
            break; //si esta es la opción, sale y no evalúa más
        case 5:
            alert ("Has aprobado por los pelos!!");
            break;
        case 6: 
            alert ("Has aprobado con un bien, no está mal!!");
            break;
        case 7:
        case 8:  
            alert ("Has aprobado con un notable, vas bastante bien!!");
            break;
        case 9:
        case 10: 
        alert ("Tienes un sobresaliente, enhorabuena!!");
        break;
        default:
            alert ("La nota debe estar entre 1 y 10");
    } 
}
aprobadoSwitchEnteros();

//switch evaluando expresiones lógicas
//PONEMOS TRUE EN EL ELEMENTO QUE SE EVALÚA
function aprobadoSwitchDecimales(){
    let nota = prompt ("¿Qué nota has sacado en el examen?");
        nota = parseFloat(nota);
        
    switch (true) {
        case (nota < 5):
        alert ("Has suspendido, debes prepararte mejor");
        break; //si esta es la opción, sale y no evalúa más
        case ((nota >= 5) && (nota < 6)):
        alert ("Has aprobado por los pelos!!");
        break;
        case ((nota >= 6) && (nota < 7)): 
        alert ("Has aprobado con un bien, no está mal!!");
        break;
        case (nota >= 7) && (nota < 9): 
        alert ("Has aprobado con un notable, vas bastante bien!!");
        break;
        case (nota >= 9) && (nota <=10):
        alert ("Tienes un sobresaliente, enhorabuena!!");
        break;
        default:
            alert ("La nota debe estar entre 1 y 10");
    } 
}
aprobadoSwitchDecimales();



/***********************************
**********OPERADOR TERNARIO*********
************************************/
/*
const autenticado = true;
const tieneCredito = false;
console.log(autenticado ? "Usuario de la comunidad" : "No estás autenticado");
//evaluamos varias expresiones
console.log(autenticado && tieneCredito ? "Bienvenido a la pasarela de pagos" : "No estás autenticado o debes reponer crédito");
//añadimos if anidados en el operador ternario
console.log(autenticado ? tieneCredito ? "Elige la forma de pago" : "Autenticado SI, crédito NO" :"No estás autenticado :( ");

*/