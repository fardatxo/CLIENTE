import { Poliza } from './appClases.js';

window.addEventListener("load", function () {
  const anos = document.querySelector("#year");
  const gama = document.querySelector("#gama");
  const antes = document.querySelector("#resultado");
  const botonvalidar = document.querySelector('button[type="submit"]');
  let contenidogama = "";
  let contenidoano = "";

  const actual = new Date().getFullYear();
  const consecutivo = [];

  for (let x = 0; x < 20; x++) consecutivo.push(actual - x);

  consecutivo.forEach((x) => {
    const crear = document.createElement("option");
    crear.textContent = x;
    crear.value = x;
    anos.appendChild(crear);
  });

  gama.addEventListener("input", (e) => (contenidogama = e.target.value));
  anos.addEventListener("input", (e) => (contenidoano = e.target.value));

  botonvalidar.addEventListener("click", (e) => {
    e.preventDefault();

    const cobertura = document.querySelector('input[name="tipo"]:checked');

    if (contenidoano === "" || contenidogama === "" || !cobertura) {
      if (!document.querySelector(".error")) mostrarError();
    } else {
      borrarError();

      const poliza = new Poliza(contenidogama, contenidoano, cobertura.value);
      poliza.mostrarInfoHTML();
    }
  });

  function mostrarError() {
    const crear = document.createElement("div");
    crear.className = "error mt-10";
    crear.textContent = "Todos los campos son OBLIGATORIOS";
    antes.after(crear);
    setTimeout(() => borrarError(), 3000);
  }

  function borrarError() {
    const err = document.querySelector(".error");
    if (err) err.remove();
  }
});
