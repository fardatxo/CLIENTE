// Le pido al usuario un número y lo guardo en la variable "num"
let num = Number(prompt('Dime el número'));

// Le aviso en la consola cuántas veces voy a duplicar ese número (tantas como el valor que me dio)
console.log('El número que se hallará el doble ' +num+ ' veces')

// Hago una copia del número original en otra variable ("numero") para no perder el valor inicial
// y poder ir modificándolo sin afectar el contador del bucle
let numero = num;

// Empiezo un bucle que se repetirá exactamente "num" veces (el número que me dio el usuario)
for (let x = 0; x < num; x++) {
    // En cada vuelta, multiplico el valor actual de "numero" por 2 (lo duplico)
    numero = numero*2;

    // Y muestro en la consola el resultado de esa duplicación
    console.log(numero);
} 