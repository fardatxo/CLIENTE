// Espera a que todo el contenido del DOM se cargue antes de ejecutar
document.addEventListener('DOMContentLoaded', function () {
    let presupuestofijado;

    // Pedimos al usuario su presupuesto inicial, hasta que sea un número válido
    while (true) {
        presupuestofijado = Number(prompt('¿Cual es tu presupuesto?'));
        if (Number.isInteger(presupuestofijado) && presupuestofijado > 0) {
            alert('Presupuesto aceptado');
            break; // Si es válido, salimos del bucle
        } else {
            alert('Presupuesto no válido'); // Si no, volvemos a pedir
        }
    }

    // Creamos una instancia de la clase Interfaz
    const funciones = new Interfaz();
    funciones.mostrar(presupuestofijado); // Mostramos presupuesto en la UI

    // Creamos un objeto de la clase Presupuesto con el presupuesto dado
    const presupuesto = new Presupuesto(presupuestofijado);

    // Referencias a los inputs y botón del formulario
    const gasto = document.querySelector('#gasto');
    const cantidad = document.querySelector('#cantidad');
    const boton = document.querySelector('.btn.btn-primary');

    // Variables para almacenar los valores ingresados
    let contenidogasto = '';
    let contenidocantidad = '';

    // Detecta cambios en los inputs y los guarda en las variables
    gasto.addEventListener("input", (x) => (contenidogasto = x.target.value));
    cantidad.addEventListener("input", (x) => (contenidocantidad = x.target.value));

    // Manejo del envío del formulario
    document.querySelector('#agregar-gasto').addEventListener('submit', function (x) {
        x.preventDefault(); // Evita que el formulario recargue la página

        const valorCantidad = Number(contenidocantidad);

        // Validaciones
        if (contenidogasto === '' || contenidocantidad === '') {
            funciones.erroruno(); // Campos vacíos
        } else if (isNaN(valorCantidad) || valorCantidad <= 0) {
            funciones.errordos(); // Importe inválido
        } else {
            funciones.validado(); // Gasto válido

            // Creamos un objeto gasto con id único
            const nuevoGasto = {
                id: Date.now(), // id único
                nombre: contenidogasto,
                cantidad: valorCantidad
            };

            // Añadimos el gasto al presupuesto
            presupuesto.nuevoGasto(nuevoGasto);

            // Actualizamos la interfaz: lista de gastos y restante
            funciones.imprimirGastosListado(presupuesto.gastos);
            funciones.actualizarRestante(presupuesto);

            // Reiniciamos el formulario
            this.reset();
            contenidogasto = '';
            contenidocantidad = '';

            // Si el presupuesto se agota, deshabilitamos el botón y mostramos alerta
            if (presupuesto.restante <= 0) {
                boton.disabled = true;
                funciones.alertaPresupuestoAgotado();
            }
        }
    });

    // Eliminación de gastos usando delegación de eventos
    document.querySelector('#gastos ul').addEventListener('click', function (x) {
        // Verificamos si se hizo click en un botón de eliminar
        if (x.target.classList.contains('btn-danger')) {
            // Obtenemos el id del gasto desde el atributo
            const id = Number(x.target.getAttribute('data-id-gasto'));

            // Eliminamos el gasto del presupuesto
            presupuesto.eliminarGasto(id);

            // Actualizamos la interfaz
            funciones.imprimirGastosListado(presupuesto.gastos);
            funciones.actualizarRestante(presupuesto);

            // Si hay dinero disponible, reactivamos el botón
            if (presupuesto.restante > 0) {
                boton.disabled = false;
            }
        }
    });
});
