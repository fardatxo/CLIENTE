
/*------------------------------------------
-----------PROPIEDADES-----------------------
--------------------------------------------*/
//location.href = "https://google.com";
//location = "https://google.com";

 //href: HREF (URL) de la página
 console.log(location.href);
 //hostname: nombre del host de la página
 console.log(location.hostname);
 //pathname: pathname de la página
 console.log(location.pathname);
 //protocol: protocolo de la página
 console.log(location.protocol);
 //hash: hash o ancla de la página (Ej. www.web.com/index.html#indice)
 console.log(location.hash);
 //host: nombre del hostname y el puerto
 console.log(location.host);
 //origin: nombre del protocolo, hostname y el puerto
 console.log(location.origin);
 //search: querystring de la página (Ej. www.web.com/index.html?user=natalia)
 console.log(location.search);


/*------------------------------------------
----------------MÉTODOS ---------------------
--------------------------------------------*/

 //assign(<url>): asigna un nuevo documento a la página
 function nuevoDocumento(){
  location.assign("http://www.google.com")
}
//reload(): recarga la página
function recarga(){
  location.reload();
}
//replace(<url>): sustituye la página por otra. DESAPARECE SU HISTORIAL.
function sustituye(){
  location.replace("http://www.google.com");
}
  
