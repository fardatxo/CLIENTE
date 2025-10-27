// Le pido al usuario que me dé un número, y le advierto que evite valores entre -1 y 1
let num = Number(prompt('Dime un número (evita valores entre -1 y 1):'));


// Primero verifico si el número que me dieron está dentro del rango prohibido (-1 a 1, incluidos)
if (num >= -1 && num <= 1) {
    // Si está en ese rango, le muestro un error en la consola y no hago nada más
    console.log("Error: El número está en el rango prohibido [-1, 1]");
}
else {
    // Si NO está en el rango prohibido, entonces empiezo las operaciones
    let op = 0;  // Inicializo un contador de operaciones en 0

    // Hago un bucle que se repite MIENTRAS el número NO sea infinito (ni positivo ni negativo)
    while (num !== Infinity && num !== -Infinity) {
        // En cada vuelta, multiplico el número por sí mismo (lo elevo al cuadrado)
        let resultado = num * num;

        // Aumento el contador de operaciones
        op++;

        // Muestro en consola qué operación es, qué número estoy multiplicando y cuál es el resultado
        console.log('Operación '+op+': '+num+' x '+num+' = '+resultado);

        // Actualizo el valor de "num" para que en la siguiente vuelta use el resultado (sigue elevando al cuadrado)
        num = resultado;
    }

    // Cuando finalmente el número se vuelve infinito (porque creció demasiado), salgo del bucle y muestro cuántas operaciones tomó
    console.log('¡Se alcanzó infinito en '+op+' operaciones!');
}