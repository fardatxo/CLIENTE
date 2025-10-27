//  1. SELECCIÓN DE ELEMENTOS DEL HTML 
// Usamos querySelector para obtener referencias a los elementos que vamos a manipular
const formulario = document.querySelector('#formulario');        // El formulario principal
const enviar = document.querySelector('button[type="submit"]'); // Botón "Enviar" (el PDF sugiere seleccionar por tipo)
const emailInput = document.querySelector('#email');            // Campo de email
const asuntoInput = document.querySelector('#asunto');          // Campo de asunto
const mensajeInput = document.querySelector('#mensaje');        // Campo de mensaje

//  2. AMPLIACIÓN: AÑADIR CAMPO CC DINÁMICAMENTE (como pide el PDF) 
// Creamos un nuevo contenedor <div> para el campo CC
const divCC = document.createElement('div');
// Le damos las mismas clases de Tailwind que los otros campos para mantener el estilo
divCC.className = 'flex flex-col space-y-2';
// Insertamos el HTML del label + input dentro del div
divCC.innerHTML = `
    <label for="cc" class="font-regular font-medium">CC:</label>
    <input id="cc" type="email" name="cc" placeholder="Destino copia, opcional" class="border border-gray-300 px-3 py-2 rounded-lg" />
`;
// Insertamos este bloque justo después del campo de email
// - emailInput.closest('.flex') → busca el contenedor del campo email
// - .parentNode → sube al <form>
// - .insertBefore(nuevo, siguiente) → lo coloca en la posición correcta
emailInput.closest('.flex').parentNode.insertBefore(divCC, emailInput.closest('.flex').nextElementSibling);
// Guardamos una referencia al nuevo input para usarlo en la validación
const ccInput = document.querySelector('#cc');

//  3. ESTADO INICIAL DEL BOTÓN "ENVIAR" 
// Al cargar la página, el botón debe estar deshabilitado y con estilo de desactivado
enviar.disabled = true;
enviar.classList.add('opacity-50', 'cursor-not-allowed');

//  4. EVENTO: VALIDACIÓN EN TIEMPO REAL 
// Cada vez que el usuario escribe, borra o pega, se ejecuta la validación
formulario.addEventListener('input', validar);

//  5. EVENTO: LIMPIEZA AL PULSAR "RESET" 
// El botón type="reset" ya limpia los inputs, pero NO los mensajes de error ni el estado del botón
// Por eso lo gestionamos manualmente
formulario.addEventListener('reset', () => {
    // Eliminamos todos los mensajes de error existentes
    document.querySelectorAll('.mensaje-error').forEach(el => el.remove());
    // Volvemos al estado inicial del botón
    enviar.disabled = true;
    enviar.classList.add('opacity-50', 'cursor-not-allowed');
});

//  6. EVENTO: ENVÍO DEL FORMULARIO 
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue (comportamiento nativo de formularios)

    // Validamos una última vez antes de enviar
    if (!validar()) return; // Si hay errores, no hacemos nada más

    //  7. CREAR SPINNER DESDE JS (como exige el PDF: "Insertar el código HTML a través del fichero JS") 
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.className = 'flex justify-center mt-10';
    spinner.innerHTML = `
        <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        </div>
        <!-- Forzamos un color visible porque el spinner por defecto es blanco y no se ve en fondo blanco -->
        <style>
            #spinner .sk-chase-dot:before {
                background-color: #db2777 !important; /* pink-600 de Tailwind */
            }
        </style>
    `;
    // Insertamos el spinner justo después del formulario
    formulario.after(spinner);

    //  8. ENVIO 
    setTimeout(() => {
        alert('El mensaje se ha enviado'); // 

        //  9. MENSAJE VERDE  
        const mensajeVerde = document.createElement('div');
        mensajeVerde.id = 'mensaje-verde';
        mensajeVerde.className = 'bg-green-500 text-white p-2 text-center mt-5 rounded-lg';
        mensajeVerde.textContent = 'MENSAJE ENVIADO CORRECTAMENTE';
        formulario.after(mensajeVerde);

        //  10. SE RETEA 
        setTimeout(() => {
            formulario.reset(); // Limpia los inputs
            // Elimina todos los mensajes de error (por si acaso)
            document.querySelectorAll('.mensaje-error').forEach(el => el.remove());
            // Vuelve al estado inicial del botón
            enviar.disabled = true;
            enviar.classList.add('opacity-50', 'cursor-not-allowed');
            // Elimina el spinner y el mensaje verde
            spinner.remove();
            mensajeVerde.remove();
        }, 3000);
    }, 2000);
});

//  11. FUNCIÓN DE VALIDACIÓN (usa Object Literal, como sugiere el PDF) 
function validar() {
    // Regex exacta del PDF para validar emails
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // OBJECT LITERAL: guardamos el estado de validación de cada campo
    // El PDF dice: "Podemos crear un objeto (Object Literal), que lo iremos llenando según vaya pasando la validación"
    const validaciones = {
        email: regex.test(emailInput.value.trim()), // .trim() evita que solo espacios se consideren como rellenado
        cc: ccInput.value.trim() === '' || regex.test(ccInput.value.trim()), // CC es opcional, pero si se rellena, debe ser válido
        asunto: asuntoInput.value.trim() !== '',
        mensaje: mensajeInput.value.trim() !== ''
    };

    // Eliminamos todos los mensajes de error anteriores para evitar duplicados
    document.querySelectorAll('.mensaje-error').forEach(x => x.remove());

    // Mostramos errores solo si el campo es inválido
    if (!validaciones.email) mostrarError(emailInput, 'EMAIL');
    if (!validaciones.cc) mostrarError(ccInput, 'CC');
    if (!validaciones.asunto) mostrarError(asuntoInput, 'ASUNTO');
    if (!validaciones.mensaje) mostrarError(mensajeInput, 'MENSAJE');

    // Verificamos si todos los campos son válidos
    // Object.values() → convierte los valores del objeto en un array
    // .every() → devuelve true solo si todos los elementos cumplen la condición
    const todoValido = Object.values(validaciones).every(v => v === true);
2
    // Actualizamos el estado del botón según la validación
    if (todoValido) {
        enviar.disabled = false;
        enviar.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        enviar.disabled = true;
        enviar.classList.add('opacity-50', 'cursor-not-allowed');
    }

    return todoValido; // Útil para saber si el formulario está listo para enviar
}

//  12. FUNCIÓN PARA MOSTRAR MENSAJES DE ERROR 
function mostrarError(input, campo) {
    // Evitamos duplicar errores: si ya hay un mensaje justo después del input, no creamos otro
    // - input.nextElementSibling → el elemento inmediatamente después del input
    // - ?. → optional chaining: evita error si no existe
    // - .classList.contains('mensaje-error') → comprueba si ya es un mensaje de error
    if (input.nextElementSibling?.classList?.contains('mensaje-error')) {
        return;
    }

    // Creamos el mensaje de error con las clases exactas del PDF:
    // 'bg-red-600', 'text-white', 'p-2', 'text-center'
    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red-600 text-white p-2 text-center mensaje-error';
    errorDiv.textContent = `El campo ${campo} es obligatorio y debe ser válido.`;

    // Insertamos el mensaje justo debajo del input correspondiente
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
}