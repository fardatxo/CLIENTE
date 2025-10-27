class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // Getters y setters
    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        if (typeof edad === 'number' && edad >= 0) {
            this._edad = edad;
        } else {
            console.log("Edad debe ser un número no negativo");
        }
    }

    toString() {
        return `ID: ${this._idPersona}, Nombre: ${this._nombre} ${this._apellido}, y tiene ${this._edad} años`;
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        if (typeof sueldo === 'number' && sueldo >= 0) {
            this._sueldo = sueldo;
        } else {
            console.log("El sueldo debe ser un número no negativo");
        }
    }

    toString() {
        return `${super.toString()}, ID Empleado: ${this._idEmpleado}, Sueldo: ${this._sueldo}`;
    }
}

class Cliente extends Persona {
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fecharegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fecharegistro = fecharegistro; 
    }

    get idCliente() {
        return this._idCliente;
    }

    get fecharegistro() {
        return this._fecharegistro;
    }

    set fecharegistro(fecharegistro) {
        this._fecharegistro = fecharegistro;
    }

    toString() {
        return `${super.toString()}, ID Cliente: ${this._idCliente}, Fecha de registro: ${this._fecharegistro}`;
    }
}


let persona1 = new Persona('Adri', 'Morales', 19);
let persona2 = new Persona('Lucia', 'Ruiz', 19);
let empleado1 = new Empleado('Adri', 'Ruiz', 32, 9999);
let empleado2 = new Empleado('Lucia', 'Morales', 28, 8888);
let cliente1 = new Cliente('Adri', 'Salvador', 89, '2024-08-10');
let cliente2 = new Cliente('Lucia', 'Gonzalez', 98, '2024-08-10');

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(cliente1.toString());
console.log(cliente2.toString());