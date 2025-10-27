// Elijo un número al azar entre 0 y 10 (porque Math.random()*11 da de 0 a 10.999... y Math.floor lo redondea hacia abajo)
let num = Math.floor(Math.random()*11)

// Inicializo la variable donde guardaré lo que el usuario me responda
let respuesta = 0;

// Inicializo un contador para saber cuántos intentos lleva el usuario
let veces = 0;

// Empiezo un bucle infinito — el juego seguirá hasta que el usuario adivine o cancele
while (true) {
    // Le pregunto al usuario qué número cree que estoy pensando (del 1 al 10)
    let entrada = prompt('Del 1 al 10... ¿Qué número crees que estoy pensando?');

    // Si el usuario hace clic en "Cancelar" (o cierra el prompt), termino el juego amablemente
    if (entrada === null) {
        alert("Has cancelado el juego.");
        console.log("Juego terminado por el usuario.");
        break;  // Salgo del bucle y el programa termina
    }

    // Convierto lo que escribió el usuario en un número
    let resultado = Number(entrada);

    // Aumento el contador de intentos (porque asumo que es un intento válido... ¡pero si no lo es, lo desharé!)
    veces++;

    // Verifico si lo que escribió es un número válido (entre 1 y 10)
    if (isNaN(resultado) || resultado < 1 || resultado > 10) {
        alert('Por favor, introduce un número del 1 al 10.');  // Le aviso que se salió del rango
        console.log('Número no válido. Inténtalo de nuevo.');  // También lo digo en consola
        veces--; // Como no cuenta como intento válido, le resto uno al contador
        continue; // Vuelvo al inicio del bucle para que intente de nuevo SIN seguir evaluando
    }

    // Si llegó aquí, es porque el número es válido → lo comparo con el mío
    if (resultado === num) {
        // ¡ACERTÓ!
        console.log(`¡Enhorabuena!! Has acertado, el número era ${num}.`);  // Le digo que ha ganau
        console.log(`Lo has adivinado en ${veces} intento(s).`);  // Y le muestro en cuántos intentos
        break;  // Salgo del bucle → juego terminado
    } else {
        // Si no acertó, le doy una pista
        if (resultado < num) {
            // Su número es menor → el mío es mayor
            console.log(`Mi número es mayor que el tuyo. Llevas ${veces} intento(s).`);
        } else {
            // Su número es mayor → el mío es menor
            console.log(`Mi número es menor que el tuyo. Llevas ${veces} intento(s).`);
        }
        // Y el bucle sigue → vuelve a preguntar
    }
}