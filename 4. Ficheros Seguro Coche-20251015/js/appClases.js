// appClases.js
export class Poliza {
  constructor(gama, year, cobertura) {
    this._gama = gama;
    this._year = year;
    this._cobertura = cobertura;
    this._importe = 0;
  }

  calcularSeguro() {
    const base = 300;
    let total = base;

    switch (this._gama) {
      case "1": total += base * 0.05; break;
      case "2": total += base * 0.15; break;
      case "3": total += base * 0.30; break;
    }

    const actual = new Date().getFullYear();
    const antiguedad = actual - parseInt(this._year);
    total += total * (antiguedad * 0.03);

    if (this._cobertura.toLowerCase() === "básico") {
      total += total * 0.30;
    } else if (this._cobertura.toLowerCase() === "completo") {
      total += total * 0.50;
    }

    this._importe = Math.round(total);
    return this._importe;
  }

  mostrarInfoHTML() {
    const total = this.calcularSeguro();

    document.getElementById("staticBackdropLabel").textContent = "RESUMEN DE PÓLIZA";
    document.querySelector(".modal-body").innerHTML = `
      <p class="font-bold">Gama del vehículo: ${this._gama}</p>
      <p class="font-bold">Año del vehículo: ${this._year}</p>
      <p class="font-bold">Tipo de cobertura: ${this._cobertura}</p>
      <p class="font-bold">Importe total: ${total} €</p>
    `;

    document.querySelector(".modal-footer").innerHTML = `
      <button id="cerrarModal" class="btn btn-primary btn-raised col" type="button">Cerrar</button>
    `;

    // ✅ Bootstrap accesible desde módulo
    const bootstrapGlobal = window.bootstrap || globalThis.bootstrap;
    const modalEl = document.getElementById("modal");
    const modal = bootstrapGlobal.Modal.getOrCreateInstance(modalEl);
    modal.show();

    document.getElementById("cerrarModal").addEventListener("click", () => modal.hide());
  }
}
