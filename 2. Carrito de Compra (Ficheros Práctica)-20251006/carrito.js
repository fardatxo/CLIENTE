// 1. VARIABLES
let carrito = [];

// Referencia al <tbody> de la tabla del carrito (donde se mostrarán los cursos)
const bodyCarrito = document.querySelector('#lista-carrito tbody');

// Referencia al botón "Vaciar Carrito"
const botonVaciar = document.querySelector('#vaciar-carrito');

// 2. LISTENERS

document.addEventListener('DOMContentLoaded', function () {
    // 1. Cargar el carrito desde localStorage al inicio
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    fotosCarrito(); // Mostrar los cursos cargados

    // EN LA LISTA DE LOS CURSOS SE AÑADIRA AL CARRITO
    document.querySelectorAll('.agregar-carrito').forEach(boton => {
        boton.addEventListener('click', agregarCurso);
    });
    // SI CLICAN EN LA X SE BORRARA EL CURSO ELEGIDO
    document.querySelector('#lista-carrito').addEventListener('click', (x) => {
        if (x.target.classList.contains('borrar-curso')) {
            eliminarCurso(x);
        }
    });
    // SI CLICAN SE EJECUTARÁ LA FUNCIÓN DE VACIAR CARRITO
    if (botonVaciar) {
        botonVaciar.addEventListener('click', vaciarCarrito);
    }
});

function agregarCurso(x) {

    x.preventDefault();

    const boton = x.target;
    const card = boton.closest('.card');

    const curso = {
        id: boton.getAttribute('data-id'),
        imagen: card.querySelector('.imagen-curso').src,
        titulo: card.querySelector('h4').textContent,
        precio: card.querySelector('.precio span').textContent,
        cantidad: 1
    };
    // Buscamos si el curso ya está en el carrito (por su id)
    const indice = carrito.findIndex(item => item.id === curso.id);

    if (indice !== -1) {
        carrito[indice].cantidad++;
    } else {
        carrito.push(curso);
    }

    fotosCarrito();

}

function fotosCarrito() {
    // Limpiar el HTML previo
    bodyCarrito.innerHTML = '';

    carrito.forEach(curso => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td></td> `;
        const linkBorrar = document.createElement('a');
        linkBorrar.href = '#';
        linkBorrar.classList.add('borrar-curso');
        linkBorrar.setAttribute('data-id', curso.id);
        linkBorrar.textContent = ' X ';

        // Colocamos el botón de borrar en la última celda
        row.cells[4].appendChild(linkBorrar);
        // Añadimos la fila completa al <tbody>
        bodyCarrito.appendChild(row);
    });

    Storage();
}

function Storage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function vaciarCarrito(x){

    x.preventDefault();

    carrito = [];

    fotosCarrito();

}

function eliminarCurso(x) {

    x.preventDefault();

    const id = x.target.getAttribute('data-id');
    // Filtramos el array para quitar el curso con ese ID
    carrito = carrito.filter(curso => curso.id !== id);

    fotosCarrito();
}