// HOLA NATALIA, ABAJO ESTA LA AMPLIACIÓN COMENTADA PARA QUE COMENTES EL PRIMERO Y PUEDAS PROBAR LA AMPLIACION DE NAVIDAD

/*
let tieneBorde = false;
function mostrarReloj() {

    // 1. Seleccionamos el elemento HTML con id="hora" (donde se mostrará la hora)
    const horitas = document.querySelector('#hora');
    
    // 2. Creamos un nuevo objeto Date con la hora actual del sistema
    let horacas = new Date();
    
    // 3. Convertimos la hora actual a una cadena legible en español (formato HH:mm:ss)
    //    Ejemplo: "14:30:45"
    let mensajefinal = horacas.toLocaleTimeString('es-ES');
    
    // 4. (Opcional) Imprimimos en la consola el elemento donde se mostrará la hora
    //    Útil para depuración: ver si el elemento existe y está bien seleccionado
    console.log(horitas);
    
    // 5. Insertamos la hora formateada dentro del elemento HTML con id="hora"
    horitas.innerHTML = mensajefinal;
  
    
    // 6. Seleccionamos el elemento HTML con id="fecha" (donde se mostrará la fecha)
    const fechita = document.querySelector('#fecha');
    
    // 7. Creamos otro objeto Date (podría reutilizarse 'horacas', pero no pasa nada)
    let fechaca = new Date();
    
    // 8. Formateamos la fecha actual en español con opciones específicas:
    //    - weekday: "short" → día de la semana abreviado (ej: "lun", "mar")
    //    - day: "numeric"    → día del mes (ej: 5, 12, 30)
    //    - month: "short"    → mes abreviado (ej: "ene", "feb", "jun")
    //    Resultado típico: "lun. 5 jun."
    let mensajediafinal = fechaca.toLocaleDateString('es-ES', {
      weekday: "short",
      day: "numeric",
      month: "short"
    })
    // 9. Aplicamos un "truco" para capitalizar la PRIMERA letra del día de la semana:
    //    - /^\w/ → busca el primer carácter alfabético al inicio de la cadena
    //    - /\b\w/g → busca el primer carácter alfabético de cada palabra
    //    - c => c.toUpperCase() → toma ese carácter (llamado 'c') y lo convierte a mayúscula
    //    Ejemplo: "lun. 5 jun." → "Lun. 5 jun."
    .replace(/\b\w/g, mayuscula => mayuscula.toUpperCase());
  
    // 10. Insertamos la fecha formateada (con mayúscula inicial) en el elemento con id="fecha"
    fechita.innerHTML = mensajediafinal;

    const elementos = document.querySelectorAll('.reloj-contenedor');

    // Recorre cada uno y alterna la clase "animar"
    elementos.forEach(element => {
        element.classList.toggle('animar');
    });
    }
  // 11. Ejecutamos la función 'mostrarReloj' cada 1000 milisegundos (es decir, cada 1 segundo)
  //     Esto hace que la hora y la fecha se actualicen en tiempo real
  setInterval(mostrarReloj, 1000);
*/
  //AMPLIACION

  const fuente = document.createElement("link");

  fuente.rel = "stylesheet";
  fuente.href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap";

  document.head.appendChild(fuente);

  function mostrarReloj() {
// selecciona los elementos del html
const horitas = document.querySelector("#hora");
const fechitas = document.querySelector("#fecha");
const contenedor = document.querySelector("#contenedor");

// crea y agrega los elementos para el contador y el mensaje
const contador = document.createElement("div");
contador.id = "contador";
const mensajeNavidad = document.createElement("div");
mensajeNavidad.id = "mensaje";
contenedor.appendChild(contador);
contenedor.appendChild(mensajeNavidad);

// aplica colores y fuente navideña
horitas.style.color = "rgba(255, 0, 0, 1)";
fechitas.style.color = "rgba(0, 128, 0, 1)";
contador.style.color = "rgba(255, 215, 0, 1)";
mensajeNavidad.style.color = "rgba(255, 215, 0, 1)";

horitas.style.fontFamily = "'Mountains of Christmas', cursive";
fechitas.style.fontFamily = "'Mountains of Christmas', cursive";
contador.style.fontFamily = "'Mountains of Christmas', cursive";
mensajeNavidad.style.fontFamily = "'Mountains of Christmas', cursive";

// fondos suaves dorados
horitas.style.backgroundColor = "rgba(255, 215, 0, 0.15)";
fechitas.style.backgroundColor = "rgba(255, 215, 0, 0.15)";
contador.style.backgroundColor = "rgba(255, 215, 0, 0.1)";
mensajeNavidad.style.backgroundColor = "rgba(255, 215, 0, 0.1)";

// estilo del contenedor principal
contenedor.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
contenedor.style.border = "5px solid rgba(255, 0, 0, 0.8)";
contenedor.style.borderRadius = "15px";
contenedor.style.padding = "20px";
contenedor.style.textAlign = "center";
contenedor.style.boxShadow = "0 0 15px rgba(255, 0, 0, 0.5)";
contenedor.style.transition = "border-color 1s ease-in-out, box-shadow 1s ease-in-out";

// colores que irán cambiando en el borde
let colorIndex = 0;
const coloresNavidad = [
  "rgba(255, 0, 0, 0.8)",   // rojo
  "rgba(0, 128, 0, 0.8)",   // verde
  "rgba(255, 215, 0, 0.8)"  // dorado
];

// cambia el color del borde cada cierto tiempo
setInterval(() => {
  contenedor.style.borderColor = coloresNavidad[colorIndex];
  contenedor.style.boxShadow = `0 0 20px ${coloresNavidad[colorIndex]}`;
  colorIndex = (colorIndex + 1) % coloresNavidad.length;
}, 1500);

// función principal que muestra hora, fecha y contador
function mostrarReloj() {
  // obtiene la hora actual
  const ahora = new Date();
  horitas.innerHTML = ahora.toLocaleTimeString('es-ES');

  // muestra la fecha actual con la primera letra en mayúscula
  const mensajediafinal = ahora.toLocaleDateString('es-ES', {
    weekday: "short",
    day: "numeric",
    month: "short"
  }).replace(/\b\w/g, c => c.toUpperCase());
  fechitas.innerHTML = mensajediafinal;

  // calcula el tiempo restante hasta el 22 de diciembre
  const navidad = new Date(ahora.getFullYear(), 11, 22);
  const diferencia = navidad - ahora;

  // si aún no es navidad, muestra los días, horas, minutos y segundos restantes
  if (diferencia > 0) {
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);
    contador.innerHTML = `faltan ${dias} días, ${horas}h ${minutos}m ${segundos}s para navidad`;
    mensajeNavidad.innerHTML = "";
  } 
  // si ya es navidad, muestra el mensaje final
  else {
    contador.innerHTML = "ya llegó la navidad";
    mensajeNavidad.innerHTML = "feliz navidad";
  }
}

// actualiza cada segundo
setInterval(mostrarReloj, 1000);

  }


