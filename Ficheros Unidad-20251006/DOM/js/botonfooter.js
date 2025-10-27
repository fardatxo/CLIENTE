// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el primer elemento con la clase 'btn-flotante' y lo guarda en la variable botonFlotante
    const botonFlotante = document.querySelector('.btn-flotante');
    
    // Selecciona todos los elementos con la clase 'footer' y los guarda en la variable fotter
    // (nota: esta variable no se usa en ninguna parte del código posterior)
    const fotter = document.querySelectorAll('.footer');
    
    // Si el botón flotante existe en el documento...
    if (botonFlotante) {
        // ...asigna un evento de clic que ejecutará la función toggleBoton cuando se haga clic
        botonFlotante.addEventListener('click', toggleBoton);
    }
});

// Función que se ejecuta cada vez que se hace clic en el botón flotante
function toggleBoton() {
    // En este contexto, 'this' hace referencia al elemento que recibió el clic,
    // es decir, al botón con clase 'btn-flotante'
    
    // Comprueba si el color de fondo del botón es exactamente 'red'
    if (this.style.backgroundColor === 'red') {
        // Si es rojo, restaura los estilos originales del botón
        this.style.backgroundColor = ''; // Elimina el estilo inline de background-color
        this.style.color = '#000000';    // Establece el color del texto a negro
        this.textContent = 'Descubre más...'; // Vuelve al texto original
        
        // Intenta acceder a una variable llamada 'footer' para moverla fuera de la vista
        // (pero esta variable no está declarada en este ámbito, lo que causaría un error)
        footer.style.bottom = '-100%';
    } else {
        // Si no es rojo, aplica el estado "activo" al botón
        this.style.backgroundColor = 'red';   // Fondo rojo
        this.style.color = 'white';           // Texto blanco
        this.textContent = 'X Cerrar';        // Cambia el texto del botón
        
        // Intenta mover el footer a su posición visible
        // (nuevamente, 'footer' no está definida, lo que causaría un error)
        footer.style.bottom = '0%';
    }
}