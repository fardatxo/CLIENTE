// Le pido al usuario cuántas filas quiere que tenga la tabla
let filas = Number(prompt('Dime el número de filas:'))

// Luego le pregunto cuántas columnas quiere
let columnas = Number(prompt('Dime el número de columnas:'))

// Busco en el HTML un elemento que tenga el id "Tabla" — ahí es donde voy a meter la tabla que voy a construir
let TablaHTML = document.getElementById("Tabla")



// Creo una variable vacía llamada "html" — aquí voy a ir guardando todo el código de la tabla, poquito a poco
let html = "";

// Empiezo un bucle que se repite tantas veces como filas haya pedido el usuario
for (let x = 0; x < filas; x++) {
    // En cada vuelta, abro una fila de la tabla (etiqueta <tr>)
    html += "<tr>";

    // Dentro de cada fila, hago OTRO bucle que se repite tantas veces como columnas haya pedido
    for (let y = 0; y < columnas; y++) {
        // En cada vuelta de este bucle interno, agrego una celda (<td>) con el texto "Adri" dentro
        html += "<td>Adri</td>";
    }

    // Cuando termino de poner todas las celdas de esta fila, cierro la fila (</tr>)
    html += "</tr>";
}
 
// Una vez que tengo toda la tabla armada en la variable "html", la meto dentro del elemento que encontré antes (el de id "Tabla")
TablaHTML.innerHTML = html;