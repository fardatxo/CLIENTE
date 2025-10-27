
/*------------------------------------------
-----------PROPIEDADES BÁSICAS --------------
--------------------------------------------*/

           window.name = "BOM: OBJETO WINDOW";
			let texto = "";
			//Nombre de la ventana
			texto += "<br/>Nombre: "+window.name;
			//Tamaño de la ventana exterior (con toolbar y scrollbar)
			texto += "<br/>Ancho externo: "+window.outerWidth;
			texto += "<br/>Alto externo: "+window.outerHeight;
			//Tamaño de la ventana interior (sin toolbar ni scrollbar)
			texto += "<br/>Ancho interno: "+window.innerWidth;
			texto += "<br/>Alto interno: "+window.innerHeight;	
			//Scroll horizontal y vertical --> scrollX y scrollY
			texto += "<br/>Scroll horizontal: "+window.pageXOffset;
			texto += "<br/>Scroll vertical: "+window.pageYOffset;	
			//Distancia de la esquina superior izquierda
			texto += "<br/>Distancia desde la izquierda: "+window.screenX;
			texto += "<br/>Distancia desde arriba: "+window.screenY;	

			document.write(texto);

/*****************************************************
MÉTODOS PARA MANIPULAR TAMAÑO Y POSICIÓN DE LA VENTANA
******************************************************/
let miVentana;

//open
function crearVentana(){
	 //miVentana = window.open("http://www.google.com");
	 miVentana = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
	// miVentana.document.write("<h2>Mi ventana</h2>");
}

//close
function cerrarVentana(){
	miVentana.close();
}
//resizeBy --> redimensiona una ventana en el nº de píxeles que indicamos
				//se "estira" desde la esquina inferior derecha.
function agrandarVentana(){
	miVentana.resizeBy(25,25);
}					
//resizeTo --> redimensiona una ventana el nº de píxeles que indicamos
function redimensionarVentana(){
	//miVentana.resizeBy(25,25);
	miVentana.resizeTo(250,300);
}
//moveBy --> mueve una ventana al nº de píxeles que indicamos respecto a su posición actual
function moverVentana(){
	miVentana.moveBy(100,100);
}
//moveTo --> mueve una ventana a una posición concreta según los píxeles
function trasladarVentana(){
	miVentana.moveTo(0,0);
}
//focus --> da el foco a la ventana concreta.
function focoVentana(){
	miVentana.focus();
}
//print--> imprime la ventana concreta
function imprimir(){
	//print();
	miVentana.print();
}
//stop --> para la carga de la página
function parar(){
	miVentana.stop();
	
}

/*****************************************************
*******************MÉTODOS TIEMPO*********************
******************************************************/

//setTimeout --> indica el tiempo que ha de pasar para que se 
//ejecute la función del parámetro.

function saludar(){
	miVentana.document.write("<h2>HOla</h2>")
}
//clearTimeout --> detener setTimeout (si asignado a variable)
//en este caso, directamente en el evento (html)

//setInterval --> repite la función cada intervalo de tiempo.
function saludar2(){
	miVentana.document.write("<h3>HOla</h3>")
}