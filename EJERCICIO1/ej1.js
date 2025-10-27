// Primero le pido al usuario su nombre, salario actual, cuántos hijos tiene y su edad
let nombre = prompt('Introduce tu nombre:')
let salarioactual = Number(prompt('Introduce tu salario:'))
let hijos = Number(prompt('Cuantos hijos:'))
let edad = Number(prompt('Cuantos años tienes:'))

// Uso un switch con "true" para evaluar varias condiciones una por una (como si fueran if-else encadenados)
// Es un switch, pero infinito hasta que encuentre un break
switch (true) {

    // Caso 1: Si ganas menos de 1000, tienes menos de 30 años y tienes más de 1 hijo → te subo el sueldo a 1200 fijo
    case (salarioactual < 1000 && edad < 30 && hijos > 1):
        salarioactual = 1200;
        alert(nombre + ', tu salario actual es de ' + salarioactual);
        break;

    // Caso 2: Si ganas menos de 1000, tienes menos de 30 años, pero NO tienes hijos → te doy un 5% de aumento
    case (salarioactual < 1000 && edad < 30 && hijos === 0):
        salarioactual = salarioactual + salarioactual * 0.05;
        alert(nombre + ', tu salario actual es de ' + salarioactual);
        break;

    // Caso 3: Si tienes entre 30 y 45 años, ganas menos de 1250 y tienes más de 4 hijos → te doy un 15% de aumento
    case (edad >= 30 && edad <= 45 && salarioactual < 1250 && hijos > 4):
        salarioactual = salarioactual + salarioactual * 0.15;
        alert(nombre + ', tu salario actual es de ' + salarioactual);
        break;

    // Caso 4: Si tienes entre 30 y 45 años, ganas menos de 1250 y tienes más de 1 hijo (pero no más de 4) → te doy un 10% de aumento
    case (edad >= 30 && edad <= 45 && salarioactual < 1250 && hijos > 1):
        salarioactual = salarioactual + salarioactual * 0.10;
        alert(nombre + ', tu salario actual es de ' + salarioactual);
        break;

    // Caso 5: Si tienes más de 45 años y ganas menos de 2000 → te doy un 15% de aumento (¡por veteranía!)
    case (edad > 45 && salarioactual < 2000):
        salarioactual = salarioactual + salarioactual * 0.15;
        alert(nombre + ', tu salario actual es de ' + salarioactual);
        break;

    // Caso 6: Si ganas 2000 o más → no te toca aumento, pero te lo hago saber con un mensaje especial
    case (salarioactual >= 2000):
        alert(nombre + ', tu salario es mayor o igual de 2K');
        break;

    // Si no entraste en NINGUNO de los casos anteriores → te digo que no cumples condiciones especiales
    default:
        alert(nombre + ', no cumples ninguna condición especial.');
}