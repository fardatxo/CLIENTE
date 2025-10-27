// Seleccionamos elementos
const contador = document.querySelector('.contador');
const barraFront = document.querySelector('.barraFront');

let porcentaje = 0;

// Animación de la barra
function actualizarBarra() {
  contador.textContent = `${porcentaje}%`;
  barraFront.style.width = `${porcentaje}%`;
  if (porcentaje < 100) {
    porcentaje++;
    setTimeout(actualizarBarra, 50);
  }
}

// Iniciamos al cargar la página
document.addEventListener('DOMContentLoaded', actualizarBarra);
