// ======================
// 1. VARIABLES
// ======================

// Array que almacenará los cursos añadidos al carrito (cada curso es un objeto)
let carrito = [];

// Referencia al <tbody> de la tabla del carrito (donde se mostrarán los cursos)
const tbodyCarrito = document.querySelector('#lista-carrito tbody');

// Referencia al botón "Vaciar Carrito"
const btnVaciar = document.querySelector('#vaciar-carrito');


// ======================
// 2. INICIO Y CARGA DE LISTENERS (SOLO 3, como exige el enunciado)
// ======================

// Cuando el DOM esté listo, configuramos los listeners
document.addEventListener('DOMContentLoaded', () => {

    // LISTENER 1: Añadir curso al carrito
    // Seleccionamos todos los botones con clase "agregar-carrito" y les asignamos el evento 'click'
    document.querySelectorAll('.agregar-carrito').forEach(boton => {
        boton.addEventListener('click', agregarCurso);
    });

    // LISTENER 2: Eliminar curso del carrito (usando delegación de eventos)
    // Escuchamos clics dentro de la tabla del carrito. Si el clic es en un enlace con clase "borrar-curso", llamamos a eliminarCurso
    document.querySelector('#lista-carrito').addEventListener('click', (e) => {
        if (e.target.classList.contains('borrar-curso')) {
            eliminarCurso(e);
        }
    });

    // LISTENER 3: Vaciar todo el carrito
    // Si el botón "Vaciar Carrito" existe, le asignamos el evento 'click'
    if (btnVaciar) {
        btnVaciar.addEventListener('click', vaciarCarrito);
    }
});


// ======================
// 3. FUNCIONES
// ======================

// ➤ FUNCIÓN: agregarCurso
// Se ejecuta al hacer clic en "Agregar al carrito"
function agregarCurso(e) {
    e.preventDefault(); // Evita que el enlace recargue la página

    // Obtenemos el botón clicado y su contenedor de curso (.card)
    const boton = e.target;
    const card = boton.closest('.card');

    // Creamos un OBJETO LITERAL con los datos del curso (como pide el enunciado)
    const curso = {
        id: boton.getAttribute('data-id'),               // ID del curso
        imagen: card.querySelector('.imagen-curso').src, // URL de la imagen
        titulo: card.querySelector('h4').textContent,    // Título del curso
        precio: card.querySelector('.precio span').textContent, // Precio rebajado (el <span>)
        cantidad: 1                                      // Cantidad inicial = 1
    };

    // Buscamos si el curso ya está en el carrito (por su id)
    const indice = carrito.findIndex(item => item.id === curso.id);

    if (indice !== -1) {
        // Si ya existe, incrementamos la cantidad en 1
        carrito[indice].cantidad++;
    } else {
        // Si no existe, lo añadimos al array
        carrito.push(curso);
    }

    // Actualizamos visualmente el carrito en la página
    renderizarCarrito();
}


// ➤ FUNCIÓN: renderizarCarrito
// "Pinta" el contenido del array `carrito` en la tabla HTML
function renderizarCarrito() {
    // Limpiamos todo el contenido actual del <tbody>
    tbodyCarrito.innerHTML = '';

    // Recorremos cada curso del carrito
    carrito.forEach(curso => {
        // Creamos una nueva fila (<tr>)
        const row = document.createElement('tr');

        // Usamos TEMPLATE STRING para generar el HTML de las primeras 4 celdas
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td></td> <!-- Celda para el botón "X" -->
        `;

        // Creamos el enlace "X" usando DOM SCRIPTING (como pide el enunciado)
        const linkBorrar = document.createElement('a');
        linkBorrar.href = '#';                          // Enlace inofensivo
        linkBorrar.classList.add('borrar-curso');       // Clase CSS requerida
        linkBorrar.setAttribute('data-id', curso.id);   // Atributo data-id con el ID del curso
        linkBorrar.textContent = 'X';                   // Texto del enlace

        // Insertamos el enlace en la última celda (<td>)
        row.cells[4].appendChild(linkBorrar);

        // Añadimos la fila completa al <tbody>
        tbodyCarrito.appendChild(row);
    });
}


// ➤ FUNCIÓN: eliminarCurso
// Se ejecuta al hacer clic en la "X" de un curso
function eliminarCurso(e) {
    e.preventDefault(); // Evita el comportamiento por defecto del enlace

    // Obtenemos el ID del curso desde el atributo data-id del enlace clicado
    const id = e.target.getAttribute('data-id');

    // Filtramos el array para EXCLUIR el curso con ese ID (eliminación completa)
    carrito = carrito.filter(curso => curso.id !== id);

    // Volvemos a pintar el carrito actualizado
    renderizarCarrito();
}


// ➤ FUNCIÓN: vaciarCarrito
// Se ejecuta al hacer clic en "Vaciar Carrito"
function vaciarCarrito(e) {
    e.preventDefault(); // Evita recargar la página

    // Vaciamos el array del carrito
    carrito = [];

    // Actualizamos la vista (tabla queda vacía)
    renderizarCarrito();
}