// main.js
import { categorias, productosDestacados } from "../Data/catalogo.js";
import { generarCategorias } from "../Data/Components/Categoria.js";
import { initCarruseles } from "../Data/Components/Carrusel.js";
import { generarProductoHTML } from "../Data/Components/Cardproducto.js";
import { enviarWhatsApp } from "../Data/Services/WhatsAppService.js";
import { renderSecciones } from "../Data/Render/Secciones.js";


// ============ CATEGORÍAS ============
document.querySelector("#categoria-list").innerHTML = generarCategorias(categorias);

// ============ AGRUPAR POR CATEGORÍA ============
const productosPorCategoria = productosDestacados.reduce((acc, prod) => {
  (acc[prod.categoria] ||= []).push(prod);
  return acc;
}, {});

// ============ RENDER SECCIONES ============
renderSecciones(categorias, productosPorCategoria, document.querySelector("#contenedor-secciones"));

// ============ EVENTOS GLOBALES ============
document.addEventListener("click", e => {

  if (e.target.matches(".talla-btn")) {
    const parent = e.target.parentElement;
    parent.querySelectorAll(".talla-btn").forEach(btn => btn.classList.remove("selected"));
    e.target.classList.add("selected");
  }

  if (e.target.matches(".cta")) {
    const index = parseInt(e.target.dataset.index);
    const producto = productosDestacados[index];
    const tarjeta = e.target.closest(".producto-card");
    const talla = tarjeta.querySelector(".talla-btn.selected")?.dataset.talla ?? "No seleccionada";

    enviarWhatsApp(producto, talla);
  }
});

// ============ CARRUSELES ============
document.addEventListener("DOMContentLoaded", initCarruseles);
