
/*------------------------------------------
-----------PROPIEDADES BÁSICAS --------------
--------------------------------------------*/

 
 //onLine: navegador online/offline
 console.log(navigator.onLine);//true
 //language: idioma del navegador
 console.log(navigator.language);//es-ES
 //cookieEnabled: cookies activadas
 console.log(navigator.cookieEnabled);//true
 //userAgent: cabecera user-agent devuelta por el navegador al servidor
 console.log(navigator.userAgent);

 //geolocation: devuelve un objeto geolocation que puede servir para localizar la posición del usuario. 
let localiz = navigator.geolocation;
console.log (localiz);
//storage: devuelve un objeto storage para el almacenamto de datos persistentes
console.log(navigator.storage);
 



 
