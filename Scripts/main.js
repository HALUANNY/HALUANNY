// Scripts/main.js

import { categorias, productosDestacados } from "../Data/catalogo.js";
import { generarCategorias } from "../Data/Components/Categoria.js";
import { generarProductoHTML } from "../Data/Components/Cardproducto.js";
import { initCarruseles } from "../Data/Components/Carrusel.js";
import { enviarWhatsApp } from "../Data/Services/WhatsAppService.js";
import { actualizarColorProducto } from "../Data/Components/ColorController.js";
import { renderSecciones } from "../Data/Render/Secciones.js";

// ======================
// 1. RENDER CATEGORÍAS
// ======================
document.querySelector("#categoria-list").innerHTML =
  generarCategorias(categorias);

// ======================
// 2. AGRUPAR PRODUCTOS POR CATEGORÍA
// ======================
const productosPorCategoria = productosDestacados.reduce((acc, prod) => {
  (acc[prod.categoria] ||= []).push(prod);
  return acc;
}, {});

// ======================
// 3. RENDER DE SECCIONES
// ======================
renderSecciones(
  categorias,
  productosPorCategoria,
  document.querySelector("#contenedor-secciones")
);

// ======================
// 4. EVENTOS GLOBALES
// ======================
document.addEventListener("click", (e) => {

  // ========== Selección de Talla ==========
  if (e.target.matches(".talla-btn")) {
    const contenedor = e.target.closest(".tallas-container");
    contenedor.querySelectorAll(".talla-btn")
      .forEach(btn => btn.classList.remove("selected"));

    e.target.classList.add("selected");
    return;
  }

  // ========== Selección de Color ==========
  if (e.target.matches(".color-btn")) {
    const tarjeta = e.target.closest(".producto-card");
    const index = tarjeta.dataset.index;
    const nuevoColor = e.target.dataset.color;

    // Estilos visuales
    const contenedorColores = e.target.closest(".colores-container");
    contenedorColores.querySelectorAll(".color-btn")
      .forEach(btn => btn.classList.remove("selected"));
    e.target.classList.add("selected");

    // Cambio del carrusel
    actualizarColorProducto(index, nuevoColor);
    return;
  }

  // ========== BOTÓN WHATSAPP ==========
  if (e.target.matches(".cta")) {
    const tarjeta = e.target.closest(".producto-card");
    const index = tarjeta.dataset.index;
    const producto = productosDestacados[index];

    // Talla seleccionada
    const talla = tarjeta.querySelector(".talla-btn.selected")?.dataset.talla || "No seleccionada";

    // Color seleccionado
    const color = tarjeta.querySelector(".color-btn.selected")?.dataset.color || "No seleccionado";

    enviarWhatsApp(producto, talla, color);
    return;
  }
});

// ======================
// 5. INICIALIZAR CARRUSELES
// ======================
document.addEventListener("DOMContentLoaded", () => {
  initCarruseles();
});
