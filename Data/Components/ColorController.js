// Data/Components/ColorController.js

import { productosDestacados } from "../../Data/catalogo.js";
import { initCarruseles } from "./Carrusel.js";

/**
 * Actualiza las imágenes de un producto según el color seleccionado.
 * @param {number} index - Índice del producto en productosDestacados.
 * @param {string} nuevoColor - Nombre del color seleccionado.
 */
export function actualizarColorProducto(index, nuevoColor) {
  const producto = productosDestacados[index];
  if (!producto) return;

  const nuevasImagenes = producto.colores[nuevoColor];
  console.log("Cambiando color del producto", index, "a", nuevoColor, nuevasImagenes);
  if (!nuevasImagenes) {
  console.warn(`Color no encontrado: ${nuevoColor}`);
  return;
  }


  const tarjeta = document.querySelector(
    `.producto-card[data-index="${index}"]`
  );
  if (!tarjeta) return;

  const track = tarjeta.querySelector(".detail-img-track");
  const indicadores = tarjeta.querySelector(".carousel-indicators");
  if (!track || !indicadores) return;

  // --- 1. Activar efecto blur/fade-out ---
  track.classList.add("cambio-color");

  setTimeout(() => {
    const imgs = track.querySelectorAll("img");

    // --- 2. Ajustar número de imágenes ---
    if (nuevasImagenes.length > imgs.length) {
      // Agregar imágenes faltantes
      nuevasImagenes.slice(imgs.length).forEach((src) => {
        const img = document.createElement("img");
        img.loading = "lazy";
        img.draggable = false;
        img.style.userSelect = "none";
        track.appendChild(img);
      });
    } else if (nuevasImagenes.length < imgs.length) {
      // Eliminar imágenes extra
      [...imgs].slice(nuevasImagenes.length).forEach((img) => img.remove());
    }

    // --- 3. Actualizar src de las imágenes existentes ---
    [...track.querySelectorAll("img")].forEach((img, i) => {
      img.src = nuevasImagenes[i];
    });

    // --- 4. Limpiar los dots existentes y crear nuevos ---
    indicadores.replaceChildren();
    nuevasImagenes.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("carousel-dot");
      dot.dataset.img = i;
      indicadores.appendChild(dot);
    });

    // --- 5. Reset scroll del track al inicio ---
    track.parentElement.scrollLeft = 0;

    // --- 6. Fade-in ---
    setTimeout(() => {
      track.classList.remove("cambio-color");
      track.classList.add("cambio-color-activo");

      setTimeout(() => track.classList.remove("cambio-color-activo"), 350);
    }, 50);

    // --- 7. Re-inicializar el carrusel SOLO para esta tarjeta ---
    initCarruseles(tarjeta);
  }, 200);
}
