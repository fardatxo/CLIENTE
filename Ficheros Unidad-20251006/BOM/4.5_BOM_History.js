
/*------------------------------------------
-----------PROPIEDAD LENGTH ----------------
--------------------------------------------*/

 //length: número de URLs en el historial de la página.
 alert("URLs del historial: "+history.length);

/*------------------------------------------
----------------MÉTODOS ---------------------
--------------------------------------------*/

 //MÉTODOS DEL OBJETO HISTORY
 //back: carga la url anterior en el historial
 function atras(){
   history.back();
 }

 //forward: cargar la url siguiente en el historial
 function adelante(){
   history.forward();
 }

 //go(<numero|url>): va a una página concreta del historial. 
 function ir(){
   var numero = prompt("Indica un número para moverte en el historial");
   history.go(numero);
 }
  
