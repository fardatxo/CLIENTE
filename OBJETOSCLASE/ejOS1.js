// intervalo.js

// Pedir valores al usuario
let minimo = Number(prompt("Introduce el número mínimo:"));
let maximo = Number(prompt("Introduce el número máximo:"));

// Validación: deben ser enteros y min ≤ max
if (
  minimo.toString().trim() === "" || maximo.toString().trim() === "" ||
  Number(minimo) != minimo || Number(maximo) != maximo ||
  !Number.isInteger(minimo) || !Number.isInteger(maximo) ||
  minimo > maximo
) {
  console.log("Error: introduce números enteros válidos y asegúrate de que min ≤ max.");
} else {

  // Objeto intervalo
  let intervalo = {
    min: minimo,
    max: maximo,

    // Getter: genera array con los números entre min y max
    get rango() {
      let arr = [];
      for (let i = this.min; i <= this.max; i++) {
        arr.push(i);
      }
      return arr;
    },

    // Setter: recibe un array y ajusta min y max
    set nuevosValores(array) {
      this.min = Math.min(...array);
      this.max = Math.max(...array);
      this._aleatorio = array;
    },

    mostrarAleatorio() {
      return this._aleatorio ? this._aleatorio : [];
    }
  };

  // Mostrar rango inicial
  console.log(`El array según su intervalo es: ${intervalo.rango}`);
  console.log(`El valor mínimo del array es: ${intervalo.min}`);
  console.log(`El valor máximo del array es: ${intervalo.max}`);

  // Generar array aleatorio de 5 números entre 1 y 100
  let arrayAleatorio = [];
  for (let i = 0; i < 5; i++) {
    arrayAleatorio.push(Math.floor(Math.random() * 100) + 1);
  }

  // Usar setter
  intervalo.nuevosValores = arrayAleatorio;

  // Mostrar nuevos resultados
  console.log(`\nEl array con números aleatorios es: ${intervalo.mostrarAleatorio()}`);
  console.log(`El valor mínimo del nuevo array es: ${intervalo.min}`);
  console.log(`El valor máximo del nuevo array es: ${intervalo.max}`);
}
