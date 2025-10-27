document.addEventListener('DOMContentLoaded', function () {
    const tareasApartado = document.querySelector('#lista-tareas');
    const tarea = document.querySelector('#tarea');
    const body = document.querySelector('body');
    let contenidotarea = '';
    let tarearr = [];

    cargarTareasLocalStorage();

    tarea.addEventListener("input", (x) => {
        contenidotarea = x.target.value.trim();
    });

    document.querySelector('#formulario').addEventListener('submit', function (x) {
        x.preventDefault();
        contenidotarea = contenidotarea.trim();

        if (contenidotarea === '') {
            mostrarError("NO HAS PUESTO NINGUNA TAREA...");
            return;
        }

        if (contenidotarea.length > 30) {
            mostrarError("LA TAREA ES DEMASIADO LARGA...");
            return;
        }

        if (tarearr.map(t => t.toLowerCase()).includes(contenidotarea.toLowerCase())) {
            mostrarError('"' + contenidotarea + '" YA EXISTE...');
            return;
        }

        tarearr.push(contenidotarea);
        agregarTareaDOM(contenidotarea);
        guardarEnLocalStorage();
        
        tarea.value = '';
        contenidotarea = '';
    });

    function mostrarError(mensaje) {
        if (document.querySelector('.error')) {
            return;
        }

        const crear = document.createElement("div");
        crear.className = "error";
        crear.textContent = mensaje;
        body.appendChild(crear);
        
        tarea.value = '';
        contenidotarea = '';
        
        setTimeout(() => crear.remove(), 3000);
    }

    function agregarTareaDOM(textoTarea) {
        let ul = tareasApartado.querySelector('ul');
        if (!ul) {
            ul = document.createElement('ul');
            ul.style.listStyle = 'disc';
            ul.style.paddingLeft = '20px';
            tareasApartado.appendChild(ul);
        }

        const li = document.createElement('li');
        li.style.marginLeft = '10%';

        const textoElemento = document.createElement('span');
        textoElemento.textContent = textoTarea.toUpperCase();

        const botonBorrar = document.createElement('span');
        botonBorrar.textContent = 'X';
        botonBorrar.className = 'borrar-tarea';

        botonBorrar.addEventListener('click', function() {
            borrarTarea(textoTarea, li);
        });

        li.appendChild(textoElemento);
        li.appendChild(botonBorrar);
        ul.appendChild(li);
    }

    function borrarTarea(textoTarea, elemento) {
        tarearr = tarearr.filter(t => t !== textoTarea);
        elemento.remove();
        guardarEnLocalStorage();
    }

    function guardarEnLocalStorage() {
        localStorage.setItem('tareas', JSON.stringify(tarearr));
    }

    function cargarTareasLocalStorage() {
        const tareasGuardadas = localStorage.getItem('tareas');
        
        if (tareasGuardadas) {
            tarearr = JSON.parse(tareasGuardadas);
            tarearr.forEach(tarea => {
                agregarTareaDOM(tarea);
            });
        }
    }
});