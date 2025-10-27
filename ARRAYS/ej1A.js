// Creamos un array vacío para guardar todas las palabras que el usuario introduzca
let palabras = [];

// Bucle infinito: seguimos pidiendo palabras hasta que el usuario cancele o deje el campo vacío
while (true) {
    // Mostramos un cuadro de diálogo para que el usuario escriba una palabra
    let entrada = prompt("Introduce una palabra (deja vacío o cancela para terminar):");
    
    // Si el usuario hace clic en "Cancelar", prompt() devuelve null
    // Si el usuario escribe solo espacios o nada, trim() lo convierte en cadena vacía ""
    if (entrada === null || entrada.trim() === "") {
        break; // Salimos del bucle
    }

    // Guardamos la palabra EXACTAMENTE como la escribió (con espacios, mayúsculas, etc.)
    // Lo hacemos así porque más adelante vamos a validarla y limpiarla
    palabras.push(entrada);
}

// Ahora vamos a filtrar solo las palabras VÁLIDAS
let validas = []; // Array donde guardaremos las palabras que cumplan las reglas

// Recorremos cada palabra que el usuario introdujo
for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i]; // La palabra actual

    // trim() elimina espacios al principio y al final
    // Ejemplo: "  hola  " → "hola"
    let trimPalabra = palabra.trim();

    // Si después de quitar espacios no queda nada, la ignoramos
    if (trimPalabra === "") {
        continue; // Pasamos a la siguiente palabra
    }

    // 🔍 ¿Contiene algún número?
    // /\d/ es una expresión regular que significa: "¿hay algún dígito del 0 al 9?"
    // .test() devuelve true si encuentra al menos un número
    let tieneNumeros = /\d/.test(trimPalabra);

    // 🔍 ¿Contiene algún espacio EN MEDIO?
    // / / es una expresión regular que busca un espacio en blanco
    // Si la palabra es "hola mundo", tiene un espacio → inválida
    // Nota: ya quitamos espacios al inicio y al final con trim(), así que si hay un espacio ahora, es INTERMEDIO
    let tieneEspaciosIntermedios = / /.test(trimPalabra);

    // Solo aceptamos la palabra si:
    // - NO tiene números
    // - NO tiene espacios intermedios
    if (!tieneNumeros && !tieneEspaciosIntermedios) {
        // Si pasa las pruebas, la guardamos (ya limpia, sin espacios al inicio/final)
        validas.push(trimPalabra);
    }
}

// Ordenamos las palabras válidas de la Z a la A
// Primero .sort() las ordena de la A a la Z (orden alfabético normal)
// Luego .reverse() invierte el orden → queda de la Z a la A
validas.sort().reverse();

// Mostramos cada palabra válida en la consola del navegador
for (let i = 0; i < validas.length; i++) {
    // i + 1 porque los índices en programación empiezan en 0, pero para el usuario mostramos 1, 2, 3...
    console.log(`El elemento ${i + 1} es: ${validas[i]}`);
}