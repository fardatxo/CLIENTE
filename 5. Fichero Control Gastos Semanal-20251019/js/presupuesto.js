// Definición de la clase Presupuesto
class Presupuesto {
    // El constructor se ejecuta cuando creamos un nuevo objeto de esta clase
    constructor(presupuesto) {
        // _presupuesto: guarda el presupuesto inicial total (convertido a número)
        this._presupuesto = Number(presupuesto);

        // _restante: guarda el dinero que queda disponible, inicialmente igual al presupuesto
        this._restante = Number(presupuesto);

        // _gastos: array que almacenará todos los gastos realizados
        this._gastos = [];
    }

    // Método para agregar un nuevo gasto
    nuevoGasto(gasto) {
        // Se añade el gasto al array de gastos
        this._gastos.push(gasto);

        // Se recalcula el restante después de agregar el gasto
        this.calcularRestante();
    }

    // Método para calcular cuánto presupuesto queda disponible
    calcularRestante() {
        // Inicializamos la variable gastado en 0
        let gastado = 0;

        // Recorremos cada gasto y sumamos su cantidad a la variable gastado
        this._gastos.forEach(gasto => {
            gastado += gasto.cantidad;
        });

        // Actualizamos el restante restando lo gastado al presupuesto inicial
        this._restante = this._presupuesto - gastado;
    }

    // Método para eliminar un gasto por su id
    eliminarGasto(id) {
        // Filtramos el array de gastos dejando solo los que no tengan el id dado
        this._gastos = this._gastos.filter(gasto => gasto.id !== id);

        // Recalculamos el restante después de eliminar el gasto
        this.calcularRestante();
    }

    // Getters para acceder a las propiedades privadas de forma segura
    get presupuesto() { return this._presupuesto; } // Devuelve el presupuesto inicial
    get restante() { return this._restante; }       // Devuelve el presupuesto restante
    get gastos() { return this._gastos; }           // Devuelve el array de gastos
}
