// Scripts/main.js

import { categorias, productosDestacados } from "../Data/catalogo.js";
import { generarCategorias } from "../Data/Components/Categoria.js";
import { generarProductoHTML } from "../Data/Components/Cardproducto.js";
import { initCarruseles } from "../Data/Components/Carrusel.js";
import { enviarWhatsApp } from "../Data/Services/WhatsAppService.js";
import { actualizarColorProducto } from "../Data/Components/ColorController.js";
import { renderSecciones } from "../Data/Render/Secciones.js";

// ============================================
// 1. ASIGNAR ÍNDICE GLOBAL A CADA PRODUCTO
// ============================================
// Esto permite identificar SIEMPRE el producto correcto,
// sin importar categoría, filtros, grids o posición.
productosDestacados.forEach((p, i) => {
  p.globalIndex = i;
});


// ============================================
// 2. RENDER CATEGORÍAS
// ============================================
document.querySelector("#categoria-list").innerHTML =
  generarCategorias(categorias);


// ============================================
// 3. AGRUPAR PRODUCTOS POR CATEGORÍA
// ============================================
const productosPorCategoria = productosDestacados.reduce((acc, prod) => {
  (acc[prod.categoria] ||= []).push(prod);
  return acc;
}, {});


// ============================================
// 4. RENDER DE SECCIONES (CON ÍNDICE GLOBAL)
// ============================================
renderSecciones(
  categorias,
  productosPorCategoria,
  document.querySelector("#contenedor-secciones")
);


// ============================================
// 5. EVENTOS GLOBALES → COLORES, TALLAS, WHATSAPP
// ============================================
document.addEventListener("click", (e) => {

  // ========== SELECCIONAR TALLA ==========
  if (e.target.matches(".talla-btn")) {
    const contenedor = e.target.closest(".tallas-container");

    contenedor.querySelectorAll(".talla-btn")
      .forEach(btn => btn.classList.remove("selected"));

    e.target.classList.add("selected");
    return;
  }

  // ========== SELECCIONAR COLOR ==========
  if (e.target.matches(".color-btn")) {

    const tarjeta = e.target.closest(".producto-card");
    const indexGlobal = tarjeta.dataset.index;       // <--- AHORA CORRECTO
    const nuevoColor = e.target.dataset.color;

    // Estilos
    const contenedorColores = tarjeta.querySelector(".colores-container");
    contenedorColores.querySelectorAll(".color-btn")
      .forEach(btn => btn.classList.remove("selected"));

    e.target.classList.add("selected");

    // Actualizar carrusel
    actualizarColorProducto(indexGlobal, nuevoColor);
    return;
  }

  // ========== BOTÓN WHATSAPP ==========
  if (e.target.matches(".cta")) {
    const tarjeta = e.target.closest(".producto-card");
    const indexGlobal = tarjeta.dataset.index;
    const producto = productosDestacados[indexGlobal];

    // Obtener talla seleccionada
    const talla =
      tarjeta.querySelector(".talla-btn.selected")?.dataset.talla ||
      "No seleccionada";

    // Obtener color seleccionado
    const color =
      tarjeta.querySelector(".color-btn.selected")?.dataset.color ||
      "No seleccionado";

    enviarWhatsApp(producto, talla, color);
    return;
  }

});

// ============================================
// 6. INICIALIZAR CARRUSELES
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initCarruseles();
});





document.addEventListener("click", (e) => {
  const item = e.target.closest(".category-item");
  if (!item) return;

  const target = item.dataset.target;
  const section = document.querySelector(target);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});


