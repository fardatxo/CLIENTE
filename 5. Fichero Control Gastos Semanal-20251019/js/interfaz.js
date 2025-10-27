// Clase que se encarga de manejar la interfaz de usuario (UI)
class Interfaz {
    
    // Elimina mensajes de alerta previos (errores o éxito)
    limpiarMensajes() {
        const mensaje = document.querySelector('#agregar-gasto');
        const alertas = mensaje.querySelectorAll('.alert-danger, .alert-success');
        alertas.forEach(alert => alert.remove());
    }

    // Muestra error si faltan campos obligatorios
    erroruno() {
        this.limpiarMensajes(); // Primero limpia mensajes previos
        const mensaje = document.querySelector('#agregar-gasto');
        const crear = document.createElement("div"); // Crea un div para el mensaje
        crear.className = "alert alert-danger text-center";
        crear.textContent = "Ambos campos son obligatorios";
        mensaje.prepend(crear); // Lo añade al inicio del contenedor
    }

    // Muestra error si el importe no es válido
    errordos() {
        this.limpiarMensajes();
        const mensaje = document.querySelector('#agregar-gasto');
        const crear = document.createElement("div");
        crear.className = "alert alert-danger text-center";
        crear.textContent = "Importe NO válido";
        mensaje.prepend(crear);
    }

    // Muestra mensaje de éxito cuando se agrega un gasto correctamente
    validado() {
        this.limpiarMensajes();
        const mensaje = document.querySelector('#agregar-gasto');
        const crear = document.createElement("div");
        crear.className = "alert alert-success text-center";
        crear.textContent = "Gasto agregado correctamente";
        mensaje.prepend(crear);

        // El mensaje desaparece automáticamente tras 3 segundos
        setTimeout(() => {
            crear.remove();
        }, 3000);
    }

    // Muestra el presupuesto inicial y el restante en el DOM
    mostrar(presupuesto) {
        const presupuestoDOM = document.querySelector('#total');
        const restanteDOM = document.querySelector('#restante');
        presupuestoDOM.textContent = presupuesto;
        restanteDOM.textContent = presupuesto;
    }

    // Limpia la lista de gastos en el DOM
    limpiarHTML() {
        const lista = document.querySelector('#gastos ul');
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    }

    // Imprime la lista de gastos en el DOM
    imprimirGastosListado(gastos) {
        this.limpiarHTML(); // Primero limpia cualquier gasto previo
        gastos.forEach(gasto => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
    
            // Nombre del gasto
            const nombreSpan = document.createElement('span');
            nombreSpan.textContent = gasto.nombre;
    
            // Cantidad del gasto
            const cantidadSpan = document.createElement('span');
            cantidadSpan.className = 'bg-primary text-white'; 
            cantidadSpan.textContent = gasto.cantidad + ' €';
    
            // Botón para eliminar el gasto
            const btnEliminar = document.createElement('button');
            btnEliminar.className = 'btn btn-danger';
            btnEliminar.textContent = 'Borrar X';
            btnEliminar.setAttribute('data-id-gasto', gasto.id); // Asocia el id del gasto al botón
    
            // Añade los elementos al li y luego al ul
            li.appendChild(nombreSpan);
            li.appendChild(cantidadSpan);
            li.appendChild(btnEliminar);
            document.querySelector('#gastos ul').appendChild(li);
        });
    }

    // Actualiza el presupuesto restante y cambia el color según el porcentaje
    actualizarRestante(presupuestoObj) {
        const restanteDOM = document.querySelector('#restante');
        restanteDOM.textContent = presupuestoObj.restante;

        // Calcula el porcentaje restante
        const porcentaje = (presupuestoObj.restante / presupuestoObj.presupuesto) * 100;
        const contenedor = document.querySelector('.restante');

        // Elimina clases previas de alerta
        contenedor.classList.remove('alert-success', 'alert-warning', 'alert-danger');

        // Cambia el color según el porcentaje restante
        if (porcentaje <= 25) {
            contenedor.classList.add('alert-danger'); // rojo
        } else if (porcentaje <= 50) {
            contenedor.classList.add('alert-warning'); // amarillo
        } else {
            contenedor.classList.add('alert-success'); // verde
        }
    }

    // Muestra alerta cuando se agota el presupuesto
    alertaPresupuestoAgotado() {
        this.limpiarMensajes();
        const mensaje = document.querySelector('#agregar-gasto');
        const alerta = document.createElement("div");
        alerta.className = "alert alert-danger text-center";
        alerta.textContent = "¡Has agotado tu presupuesto!";
        mensaje.prepend(alerta);

        // Desaparece automáticamente después de 3 segundos
        setTimeout(() => alerta.remove(), 3000);
    }
}
