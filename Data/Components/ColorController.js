// Data/Components/ColorController.js

import { productosDestacados } from "../../Data/catalogo.js";
import { initCarruseles } from "./Carrusel.js";

/**
 * Actualiza el carrusel de un producto cuando se cambia el color.
 */
export function actualizarColorProducto(index, nuevoColor) {
  
  const producto = productosDestacados[index];
  if (!producto) return;

  const imagenes = producto.colores[nuevoColor];
  if (!imagenes) {
    console.warn(`El color ${nuevoColor} no existe para el producto: ${producto.nombre}`);
    return;
  }

  // Buscar tarjeta
  const tarjeta = document.querySelector(`.producto-card[data-index="${index}"]`);
  if (!tarjeta) return;

  // Track de imágenes
  const track = tarjeta.querySelector(".detail-img-track");
  const indicadores = tarjeta.querySelector(".carousel-indicators");

  if (!track || !indicadores) return;

  // 1. Reemplazar las imágenes del carrusel
  track.innerHTML = imagenes
    .map((src, i) =>
      `<img src="${src}" alt="${producto.nombre} ${i + 1}" loading="lazy" draggable="false">`
    )
    .join("");

  // 2. Actualizar dataset del track
  track.dataset.color = nuevoColor;

  // 3. Regenerar los dots
  indicadores.innerHTML = imagenes
    .map((_, i) => `<span class="carousel-dot" data-img="${i}"></span>`)
    .join("");

  // 4. Activar el primer dot
  const dots = indicadores.querySelectorAll(".carousel-dot");
  if (dots.length > 0) dots[0].classList.add("active");

  // 5. Re-inicializar carrusel para recalcular centros
  setTimeout(() => {
    initCarruseles();
  }, 50);
}
